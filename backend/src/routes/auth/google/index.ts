import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { Type } from "@sinclair/typebox";
import { fastifyOauth2 } from "@fastify/oauth2";
import { request } from "http";

const authGoogle: FastifyPluginAsyncTypebox = async (fastify, opts) => {
    fastify.get("/login/google/callback", {
        // onRequest: fastify.authenticate,
        schema: {
            response: {
                200: Type.Object({ ok: Type.Literal(true) }),
                401: Type.Any(),
            }
        },
        handler: async (request, reply) => { 
            const token = await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);
            return reply.code(200).send({ ok: true });
        },
    });
    fastify.get('/login/google/callback', async function (request, reply) {
        // Este es el método proporcionado por el plugin fastify-oauth2 para obtener el token
        const token = await this.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);
        // Ahora tienes el token, lo puedes usar para hacer peticiones a la API de Google
        reply.send({ token });
    });
}

export default authGoogle;