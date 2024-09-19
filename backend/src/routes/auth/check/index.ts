import { Type } from "@sinclair/typebox";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import {
    PersonToCheckSchema,
    PersonWithPasswordCheckReturnSchema,
} from "../../../tipos/persona.js";
import { checkPersonStructure } from "../../../lib/personCheck.js";

const auth: FastifyPluginAsyncTypebox = async (fastify, opts) => {

    fastify.post("/", {
        schema: {
            security: [],
            body: Type.Ref(PersonToCheckSchema),
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

};

export default auth;
