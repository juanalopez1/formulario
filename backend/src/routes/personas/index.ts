import {
    PersonWithPasswordSchema,
    PersonSchema,
    PersonWithPasswordType,
    ErrorMessageSchema,
    PersonWithOptionalFieldsSchema,
    PersonWithPasswordCheckReturnSchema,
    PersonType,
} from "../../tipos/persona.js";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { Type } from "@sinclair/typebox";
import { checkPersonStructure, checkPersonStructureIntoArray } from "../../lib/personCheck.js";
import { query } from "../../services/database.js";

async function checkPersonExists(id: PersonType["id"]) {
    return (await getPersonFromId(id)) !== undefined;
}

async function getPersonFromId(id: PersonType["id"]) {
    const result = await query("SELECT * FROM find_user($1)", [id]);

    if (result.rows.length !== 1) {
        return undefined;
    }

    return result.rows[0] as PersonType;
}

async function searchByIdAndPassword(
    id: PersonType["id"],
    password: PersonWithPasswordType["password"],
) {
    const result = await query(
        "SELECT * FROM search_by_id_and_password($1, $2)",
        [id, password],
    );

    if (result.rows.length !== 1) {
        return undefined;
    }

    return result.rows[0] as PersonType;
}

/*async function checkPersonPassword(
    id: PersonType["id"],
    password: PersonWithPasswordType["password"],
) { }*/

const personas: PersonWithPasswordType[] = [
    {
        person: {
            name: "Juan",
            surname: "Pérez",
            email: "juan.perez@example.com",
            id: "3.456.789-0",
            rut: 123456789123,
        },
        password: "Juana123!",
    },
    {
        person: {
            name: "Cris",
            surname: "RPia",
            email: "ezponjares@gmail.com",
            id: "5.563.253-7",
            rut: 214873040084,
        },
        password: "Cris123!",
    },
];

console.log();

const personaRoute: FastifyPluginAsyncTypebox = async (
    fastify,
    _opts,
): Promise<void> => {
    fastify.get("/", {
        schema: {
            response: {
                200: Type.Array(Type.Ref(PersonSchema)),
            },
        },
        onRequest: fastify.authenticate,
        handler: async function(_request, _reply) {
            return (
                await query(`
                SELECT *
                  FROM get_curated_users();
                `)
            ).rows as PersonType[];
        },
    });

    fastify.post("/", {
        schema: {
            body: Type.Ref(PersonWithPasswordSchema),
            response: {
                200: Type.Ref(PersonWithPasswordSchema),
                400: Type.Array(Type.Ref(ErrorMessageSchema)),
            },
        },
        preHandler: async function(request, reply) {
            const personaPost = request.body;

            const err = checkPersonStructureIntoArray(request.body);

            if (err.length !== 0) {
                return reply.status(400).send(err);
            }

            if (await checkPersonExists(personaPost.person.id)) {
                return reply.status(400).send([{ errorMessage: "Id already exists" }]);
            }
        },

        handler: async function(request, reply) {
            const body = request.body;
            await query(
                String.raw`
                INSERT
                  INTO people (name, surname, email, uruguayan_id, rut, password)
                VALUES ($1, $2, $3, $4, $5, crypt($6, gen_salt('bf')))
                `,
                [
                    body.person.name,
                    body.person.surname,
                    body.person.email,
                    body.person.id,
                    body.person.rut,
                    body.password,
                ],
            );
            return reply.code(200).send(body);
        },
    });

    fastify.put("/:id", {
        schema: {
            params: Type.Object({
                id: PersonSchema.properties.id,
            }),
            body: Type.Object({
                newValue: Type.Ref(PersonWithPasswordSchema),
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
        onRequest: fastify.authenticate,
        handler: async function(request, reply) {
            const password = request.body.newValue.password;
            const person = request.body.newValue.person;

            await query(
                String.raw`
                UPDATE people
                    SET name = $1,
                        surname = $2,
                        email = $3
                        uruguayan_id = $4
                        rut = $5
                        password = $6
                    WHERE uruguayan_id = $7;
                `,
                [
                    person.name,
                    person.surname,
                    person.email,
                    request.id,
                    person.rut,
                    password,
                    request.params.id,
                ],
            );

            return reply.code(200).send(request.body.newValue);
        },
    });

    fastify.post("/check", {
        schema: {
            body: Type.Ref(PersonWithOptionalFieldsSchema),
            response: {
                200: PersonWithPasswordCheckReturnSchema,
                400: Type.Object({
                    statusCode: Type.Number(),
                    code: Type.String(),
                    error: Type.String(),
                    message: Type.String(),
                }),
            },
        },

        handler: async function(request, reply) {
            return reply.code(200).send(checkPersonStructure(request.body));
        },
    });

    fastify.post("/:id/check", {
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
        handler: async function(request, reply) {
            const result = await searchByIdAndPassword(
                request.params.id,
                request.body.password,
            );
            return { correct: result !== undefined };
        },
    });

    fastify.delete("/:id", {
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
        onRequest: fastify.authenticate,
        handler: async function(request, reply) {
            const personIndex = personas.findIndex(
                (person) => person.person.id === request.params.id,
            );
            await query(
                String.raw`
                DELETE
                  FROM people WHERE uruguayan_id = $1
                `,
                [ request.params.id ],
            );
            if (personIndex !== -1) {
                personas.splice(personIndex, 1);
                return reply.send({ message: "Person deleted successfully" });
            } else {
                return reply.notFound("Couldn't find person with such an Id");
            }
        },
    });
};

export default personaRoute;
