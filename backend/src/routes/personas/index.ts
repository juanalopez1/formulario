import {
    PersonCreationSchema,
    PersonSchema,
    PersonWithPasswordType,
    PersonType,
    FileSchema,
} from "../../tipos/persona.js";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { Type } from "@sinclair/typebox";
import { query } from "../../services/database.js";
import { typedEnv } from "../../tipos/env.js";
import fs from "fs";
import { fileURLToPath } from "url";
import path, { join } from "path";
import { createErrorMessageFromPersonStructure } from "../../lib/personCheck.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function searchByIdAndPassword(
    id: PersonType["id"],
    password: PersonWithPasswordType["password"]
) {
    const result = await query(
        "SELECT * FROM search_by_id_and_password($1, $2)",
        [id, password]
    );

    if (result.rows.length !== 1) {
        return undefined;
    }

    return result.rows[0] as PersonType;
}

const personaRoute: FastifyPluginAsyncTypebox = async (
    fastify,
    _opts
): Promise<void> => {
    fastify.get("/", {
        onRequest: fastify.authenticate,
        schema: {
            response: {
                200: Type.Array(
                    Type.Intersect([
                        Type.Ref(PersonSchema),
                        Type.Object({
                            photo: Type.String(),
                        }),
                    ])
                ),
            },
        },
        handler: async function(_request, _reply) {
            const dbPeople = (
                await query(`
                SELECT *
                  FROM get_curated_users();
                `)
            ).rows as PersonType[];

            return dbPeople.map((person) => ({
                ...person,
                photo: `https://${typedEnv.FRONT_URL}/backend/public/${person.id}`,
            }));
        },
    });

    fastify.get("/verify", {
        onRequest: fastify.authenticate,
        schema: {
            response: {
                200: Type.Object({ id: Type.String() }),
                401: Type.Any(),
            },
        },
        handler: async (request, reply) => {
            const user = request.user as {
                id: string;
            };
            const queryResult = await query(
                `
                SELECT TRUE
                  FROM people
                 WHERE id = $1;
            `,
                [user.id]
            );

            if (queryResult.rowCount === 0) {
                return reply.unauthorized("Outdated jwt token");
            }

            return reply.code(200).send({ id: user.id });
        },
    });

    fastify.put("/:id", {
        onRequest: fastify.authenticate,
        schema: {
            params: Type.Pick(PersonSchema, [
                "id",
            ] satisfies (keyof PersonType)[]),
            body: Type.Intersect([
                Type.Omit(PersonCreationSchema, [
                    "id",
                ] satisfies (keyof PersonWithPasswordType)[]),
                Type.Object({
                    photo: FileSchema,
                }),
            ]),
            response: {
                200: Type.Ref(PersonCreationSchema),
                401: Type.Object({
                    statusCode: Type.Number(),
                    code: Type.String(),
                    error: Type.String(),
                    message: Type.String(),
                }),
                400: Type.Object({
                    statusCode: Type.Number(),
                    code: Type.String(),
                    error: Type.String(),
                    message: Type.String(),
                }),
            },
        },

        preHandler(request, reply) {
            const errors = createErrorMessageFromPersonStructure(request.body);
            if (errors !== undefined) {
                return reply.badRequest(errors);
            }
        },

        handler: async function(request, reply) {
            const user = request.user as {
                id: string;
            };

            if (request.body.photo !== undefined) {
                const filename = join(process.cwd(), "public", user.id);
                await fs.promises.writeFile(filename, request.body.photo.file);
            }

            const queryResult = await query(
                `
                    UPDATE people
                       SET name = $1
                         , surname = $2
                         , email = $3
                         , rut = $4
                         , password = $5
                     WHERE id = $6;
                `,
                [
                    request.body.name,
                    request.body.surname,
                    request.body.email,
                    request.body.rut,
                    request.body.password,
                    user.id,
                ]
            );

            if (queryResult.rowCount !== 1) {
                return reply.unauthorized("You cannot modify someone else.");
            }

            return reply.code(200).send({
                ...request.body,
                id: request.params.id,
            });
        },
    });

    fastify.post("/:id/check", {
        onRequest: fastify.authenticate,
        schema: {
            params: Type.Pick(PersonCreationSchema, [
                "id",
            ] satisfies (keyof PersonWithPasswordType)[]),
            body: Type.Pick(PersonCreationSchema, [
                "password",
            ] satisfies (keyof PersonWithPasswordType)[]),
            response: {
                200: Type.Object({
                    correct: Type.Boolean(),
                }),
            },
        },
        handler: async function(request, _reply) {
            const result = await searchByIdAndPassword(
                request.params.id,
                request.body.password
            );
            return { correct: result !== undefined };
        },
    });

    fastify.delete("/:id", {
        onRequest: fastify.authenticate,
        schema: {
            params: Type.Pick(PersonCreationSchema, [
                "id",
            ] satisfies (keyof PersonWithPasswordType)[]),
            response: {
                200: Type.Object({
                    message: Type.Literal("Person deleted successfully"),
                }),
            },
        },

        handler: async function(request, reply) {
            const user = request.user as {
                id: string;
            };

            const result = await query(
                `
                       DELETE
                         FROM people
                        WHERE id = $1
                          AND id = $2
                    RETURNING 1;
                `,
                [user.id, user.id]
            );

            switch (result.rowCount) {
                case 0:
                    return reply.unauthorized(
                        "Could not delete person with such crentials."
                    );
                case 1:
                    try {
                        // If the file does not exist this may error. We don't
                        // care.
                        await fs.promises.rm(
                            __dirname + "/../../../public/" + user.id
                        );
                    } finally {
                        return reply
                            .code(200)
                            .send({ message: "Person deleted successfully" });
                    }
                default:
                    throw `Deleted ${result.rowCount} rows.`;
            }
        },
    });
};

export default personaRoute;
