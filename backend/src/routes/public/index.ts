import {
    FastifyPluginAsyncTypebox,
    Type,
} from "@fastify/type-provider-typebox";
import { PersonSchema, PersonType } from "../../tipos/persona.js";

const pub: FastifyPluginAsyncTypebox = async (fastify, opts) => {
    fastify.get("/:id", {
        schema: {
            params: Type.Object({
                id: Type.Pick(PersonSchema, [
                    "id",
                ] satisfies (keyof PersonType)[]),
            }),
        },
        handler: (request, reply) => {},
    });
};

export default pub;
