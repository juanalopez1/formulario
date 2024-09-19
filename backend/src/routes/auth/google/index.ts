import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const googleRoutes: FastifyPluginAsyncTypebox = async (fastify, opts) => {
  fastify.get('/callback', 
    async function (request, reply) {
        const { token: googleToken } = await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request);
        const accessToken = googleToken.access_token;
        console.log({accessToken});

        const userInfo = await this.googleOAuth2.userinfo(accessToken);
        console.log(userInfo);
        reply.code(200);
    }

    
  );
}

export default googleRoutes;
