import {
    PersonWithPasswordSchema,
    PersonSchema,
    PersonWithPasswordType,
    PersonToCheckSchema,
    PersonWithPasswordCheckReturnSchema,
    PersonType,
} from "../../tipos/persona.js";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { Type } from "@sinclair/typebox";
import {
    checkPersonStructure,
} from "../../lib/personCheck.js";
import { query } from "../../services/database.js";
import { ensureKeyArray } from "../../lib/utils.js";

async function searchByIdAndPassword(
    id: PersonType["id"],
    password: PersonWithPasswordType["password"],
) {
    const result = await query(
        "SELECT * FROM search_by_id_and_password($1, $2)",
        [id,password],
    );

    if (result.rows.length !== 1) {
        return undefined;
    }

    return result.rows[0] as PersonType;
}

const personaRoute: FastifyPluginAsyncTypebox = async (
    fastify,
    _opts,
): Promise<void> => {

    fastify.get("/", {
        onRequest: fastify.authenticate,
        schema: {
            response: {
                200: Type.Array(Type.Ref(PersonSchema)),
            },
        },
        handler: async function(_request, _reply) {
            return (
                await query(`
                SELECT *
                  FROM get_curated_users();
                `)
            ).rows as PersonType[];
        },
    });

    fastify.get("/verify", {
        onRequest: fastify.authenticate,
        schema: {
            response: {
                200: Type.Object({ ok: Type.Literal(true)}),
                401: Type.Any(),
            }
        },
        handler: (_request, reply) => { return reply.code(200).send({ ok: true })},
    });

    fastify.put("/:id", {
        onRequest: fastify.authenticate,
        schema: {
            params: Type.Object({
                id: PersonSchema.properties.id,
            }),
            body: Type.Object({
                newValue: Type.Object({
                    ...PersonWithPasswordSchema.properties,
                    person: Type.Omit(
                        PersonSchema,
                        ensureKeyArray<PersonType>()(["id"] as const),
                    ),
                }),
                oldPassword: PersonWithPasswordSchema.properties.password,
            }),
            response: {
                200: Type.Ref(PersonWithPasswordSchema),
                404: Type.Literal("Person with such Id and password does not exist."),
                // TODO: This allows for other error messages to show. We should
                // find a more ergonomic way to do this. The hard bit will be
                // keeping type safety, I assume that will take some generic
                // wizardry. - cr
                400: Type.Union([
                    // TODO: Also, the other literals arent in json. we should
                    // fix that.
                    // Type.Object({ message: Type.Literal("some message") }),
                    Type.Object({
                        statusCode: Type.Number(),
                        code: Type.String(),
                        error: Type.String(),
                        message: Type.String(),
                    }),
                ]),
            },
        },

        preHandler: async function(request, reply) {
            const person = searchByIdAndPassword(
                request.id,
                request.body.oldPassword,
            );
            if (person === undefined) {
                return reply
                    .status(404)
                    .send("Person with such Id and password does not exist.");
            }
        },
        handler: async function(request, reply) {
            const password = request.body.newValue.password;
            const person = request.body.newValue.person;

            await query(
                String.raw`
                    UPDATE people
                       SET name = $1
                         , surname = $2
                         , email = $3
                         , rut = $4
                         , password = $5
                     WHERE id = $6;
                `,
                [
                    person.name,
                    person.surname,
                    person.email,
                    person.rut,
                    password,
                    request.params.id,
                ],
            );

            return reply.code(200).send({
                ...request.body.newValue,
                person: {
                    ...request.body.newValue.person,
                    id: request.params.id,
                },
            });
        },
    });

    fastify.post("/:id/check", {
        onRequest: fastify.authenticate,
        schema: {
            params: Type.Object({ id: PersonSchema.properties.id }),
            body: Type.Object({
                password: PersonWithPasswordSchema.properties.password,
            }),
            response: {
                200: Type.Object({
                    correct: Type.Boolean(),
                }),
            },
        },
        handler: async function(request, _reply) {
            const result = await searchByIdAndPassword(
                request.params.id,
                request.body.password,
            );
            return { correct: result !== undefined };
        },
    });

    fastify.delete("/:id", {
        onRequest: fastify.authenticate,
        schema: {
            params: Type.Object({
                id: PersonSchema.properties.id,
            }),
            body: Type.Object({
                password: PersonWithPasswordSchema.properties.password,
            }),
            response: {
                200: Type.Object({
                    message: Type.Literal("Person deleted successfully"),
                }),
                404: Type.Literal("Couldn't find Id"),
                400: Type.Literal("Incorrect password"),
            },
        },
        
        preHandler: async function(request, reply) {
             const person = searchByIdAndPassword(
                 request.id,
                 request.body.password,
             );
             if (person === undefined) {
                 return reply
                     .status(404)
                     .send("Couldn't find Id");
             }
            
         },
        handler: async function(request, reply) {
            const result = (
                await query(
                    String.raw`
                      WITH deleted AS (DELETE FROM people WHERE id = $1 RETURNING 1)
                    SELECT COUNT(*) AS deleted_rows
                      FROM deleted;
                `,
                    [request.params.id],
                )
            ).rows[0] as { deleted_rows: string };

            switch (result.deleted_rows) {
                case "0":
                    return reply.code(404).send("Couldn't find Id");
                case "1":
                    return reply
                        .code(200)
                        .send({ message: "Person deleted successfully" });
                default:
                    throw `Deleted ${result.deleted_rows} rows.`;
            }
        },
    });
};

export default personaRoute;
