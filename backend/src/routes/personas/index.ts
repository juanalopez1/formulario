import { PersonaPostSchema, PersonaSchema, PersonaType } from "../../tipos/persona.js";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { Type } from "@sinclair/typebox";

const personas: PersonaType[] = [
    {
        nombre: "Juan",
        apellido: "Pérez",
        email: "juan.perez@example.com",
        cedula: "3.456.789-0",
        rut: "123456789123",
    },
];

const personaRoute: FastifyPluginAsyncTypebox = async (
    fastify,
    _opts,
): Promise<void> => {
    fastify.get("/", {
        schema: {
            response: {
                200: Type.Array(Type.Ref(PersonaSchema)),
            },
        },
        handler: async function(request, reply) {
            return personas;
        },
    });

    fastify.post("/", {
        // TODO: Specify the response.
        schema: {
            body: PersonaPostSchema,
        },
        handler: async function(request, reply) {
            const personaPost = request.body;
            personas.push(personaPost);
            return personaPost;
        },
    });
};

export default personaRoute;
