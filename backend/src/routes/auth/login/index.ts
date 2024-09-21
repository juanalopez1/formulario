import { Type } from "@sinclair/typebox";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import {
    ErrorMessageSchema,
    PersonWithPasswordSchema,
    PersonWithPasswordType,
} from "../../../tipos/persona.js";
import { query } from "../../../services/database.js";

const tokenSchema = Type.Object({
    jwtToken: Type.String(),
});

const auth: FastifyPluginAsyncTypebox = async (fastify, _opts) => {
    fastify.post("/", {
        schema: {
            body: Type.Pick(PersonWithPasswordSchema, [
                "email",
                "password",
            ] satisfies (keyof PersonWithPasswordType)[]),
            response: {
                200: tokenSchema,
                404: Type.Ref(ErrorMessageSchema),
            },
            security: [],
        },

        handler: async function(request, reply) {
            const result = await query(
                `
                SELECT id
                FROM people
                WHERE email = $1
                AND check_password(password, $2);
            `,
                [request.body.email, request.body.password],
            );
            if (result.rowCount !== 1) {
                return reply
                    .code(404)
                    .send({ errorMessage: "Wrong email or password" });
            }
            const token = fastify.jwt.sign({ id: result.rows[0].id });
            return reply.code(200).send({ jwtToken: token });
        },
    });
};

export default auth;
