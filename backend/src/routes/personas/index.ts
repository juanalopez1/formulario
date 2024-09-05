import {
    PersonWithPasswordSchema,
    PersonSchema,
    PersonWithPasswordType,
    ErrorMessageSchema,
    PersonWithOptionalFieldsSchema,
    PersonWithPasswordCheckReturnSchema,
} from "../../tipos/persona.js";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { Type } from "@sinclair/typebox";
import { checkPersonStructure, checkPersonStructureIntoArray } from "../../lib/personCheck.js";
import { query } from "../../services/database.js";

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
            rut: 214873040084
        },
        password: "Cris123!"
    }
];

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
/* handler: async function(request, reply) {
                  console.log(personas);
                  const res = await query(`
                      select
                       * from 
                      people
                  `);
                  return res.rows; esto estaba en la rama clase*/ 
        handler: async function(_request, _reply) {
            return personas.map((val) => val.person);
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

            const idAlreadyExists = personas.some(
                (val) => val.person.id === personaPost.person.id,
            );

            if (idAlreadyExists) {
                return reply.status(400).send([{ errorMessage: "Id already exists" }]);
            }
        },

        handler: async function(request, reply) {
            const personaPost = request.body;
            personas.push(personaPost);
            return personaPost;
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
                404: Type.Literal("Couldn't find Id"),
                // TODO: This allows for other error messages to show. We should
                // find a more ergonomic way to do this. The hard bit will be
                // keeping type safety, I assume that will take some generic
                // wizardry. - cr
                400: Type.Union([
                    // TODO: Also, the other literals arent in json. we should
                    // fix that.
                    Type.Object({ message: Type.Literal("Incorrect password") }),
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
            const person = personas.find(
                (person) => person.person.id === request.params.id,
            );

            console.log(personas);

            if (person === undefined) {
                return reply.status(404).send("Couldn't find Id");
            }

            const passwordIsCorrect = person.password === request.body.oldPassword;
            console.log(person.password, request.body.oldPassword);

            if (!passwordIsCorrect) {
                return reply.code(400).send({ message: "Incorrect password" });
            }
        },

        handler: async function(request, reply) {
            const personIndex = personas.findIndex(
                (person) => person.person.id === request.params.id,
            )!;
            personas[personIndex] = request.body.newValue;
            return request.body.newValue;
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
                404: Type.Object({
                    message: Type.Literal("Not found"),
                }),
            },
        },

        preHandler: async function(request, reply) {
            const person = personas.find(
                (persona) => persona.person.id === request.params.id,
            );
            if (person === undefined) {
                return reply.code(404).send({ message: "Not found" });
            }
        },

        handler: async function(request, reply) {
            const person = personas.find(
                (persona) => persona.person.id === request.params.id,
            );
            return { correct: person?.password === request.body.password };
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
            const person = personas.find(
                (person) => person.person.id === request.params.id,
            );

            console.log(person);

            if (person === undefined) {
                return reply.code(404).send("Couldn't find Id");
            }

            const passwordIsCorrect = person.password === request.body.password;

            if (!passwordIsCorrect) {
                return reply.badRequest("Incorrect password");
            }
        },

        handler: async function(request, reply) {
            const personIndex = personas.findIndex(
                (person) => person.person.id === request.params.id,
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
