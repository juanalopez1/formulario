import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { got } from "got";
import { typedEnv } from "../../../../tipos/env.js";
import { query } from "../../../../services/database.js";

interface GoogleBody {
    id: string;
    email: string;
    verified_email: boolean;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
}

const googleRoutes: FastifyPluginAsyncTypebox = async (fastify, _opts) => {
    fastify.get("/callback", async function (request, reply) {
        const { token: googleToken } =
            await fastify.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(
                request
            );

        const accessToken = googleToken.access_token;
        fastify.log.info(accessToken);

        const userInfo = await got.get(
            "https://www.googleapis.com/oauth2/v2/userinfo",
            {
                headers: {
                    authorization: "Bearer " + googleToken.access_token,
                },
            }
        );

        const body: GoogleBody = JSON.parse(userInfo.body);

        const queryResult = await query(
            `
            SELECT id
              FROM people
             WHERE email = $1;
        `,
            [body.email]
        );

        if (queryResult.rowCount !== 1) {
            return reply.redirect(`https://${typedEnv.FRONT_URL}/alta`);
        }

        const token = fastify.jwt.sign({ id: queryResult.rows[0].id });

        reply.redirect(
            `https://${typedEnv.FRONT_URL}/login/google?token=${token}`
        );
    });
};

export default googleRoutes;
