import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const googleRoutes: FastifyPluginAsyncTypebox = async (fastify, opts) => {
  fastify.get('/callback', 
    async function (request, reply) {
        const { token: googleToken } = await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);
        const accessToken = googleToken.access_token;
        fastify.log.info(accessToken);

        const userInfo = await fastify.googleOAuth2.userinfo(accessToken);
        fastify.log.info(userInfo);
        reply.code(200);
    }

    
  );
}

export default googleRoutes;
