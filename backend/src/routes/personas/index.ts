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
import {
    checkPersonStructure,
    checkPersonStructureIntoArray,
} from "../../lib/personCheck.js";
import { runPreparedQuery } from "../../services/database.js";
import { ensureKeyArray } from "../../lib/utils.js";
import * as Queries from "../../queries/queries.queries.js";

async function checkPersonExists(id: PersonType["id"]) {
    return (await getPersonFromId(id)) !== undefined;
}

async function getPersonFromId(id: PersonType["id"]) {
    const result = await runPreparedQuery(Queries.getPersonFromId, {
        id: id,
    });

    if (result.length !== 1) {
        return undefined;
    }

    return result[0];
}

async function searchByIdAndPassword(
    id: PersonType["id"],
    password: PersonWithPasswordType["password"],
) {
    const result = await runPreparedQuery(Queries.getPersonByIdAndPassword, {
        id: id,
        password: password,
    });

    if (result.length !== 1) {
        return undefined;
    }

    return result[0];
}

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
        handler: async function(_request, _reply) {
            const result = await runPreparedQuery(Queries.getCuratedPeople, {});
            return result.map((r) => ({
                ...r,
                rut: parseInt(r.rut),
            }));
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
            await runPreparedQuery(Queries.createNewPerson, {
                ...body.person,
                password: body.password,
            });
            return reply.code(200).send(body);
        },
    });

    fastify.put("/:id", {
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
            await runPreparedQuery(Queries.updatePerson, {
                ...request.body.newValue.person,
                id: request.params.id,
                password: request.body.newValue.password,
            });

            return reply.code(200).send({
                ...request.body.newValue,
                person: {
                    ...request.body.newValue.person,
                    id: request.params.id,
                },
            });
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
        handler: async function(request, _reply) {
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
            const person = searchByIdAndPassword(request.id, request.body.password);
            if (person === undefined) {
                return reply.status(404).send("Couldn't find Id");
            }
        },

        handler: async function(request, reply) {
            const result = await runPreparedQuery(Queries.deletePerson, {
                id: request.params.id,
            });

            switch (result[0].deleted_rows) {
                case "0":
                    return reply.code(404).send("Couldn't find Id");
                case "1":
                    return reply
                        .code(200)
                        .send({ message: "Person deleted successfully" });
                default:
                    throw `Deleted ${result[0].deleted_rows} rows.`;
            }
        },
    });
};

export default personaRoute;
