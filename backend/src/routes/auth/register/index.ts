import { Type } from "@sinclair/typebox";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import {
    ErrorMessageSchema,
    PersonWithPasswordSchema,
} from "../../../tipos/persona.js";
import { query } from "../../../services/database.js";

const tokenSchema = Type.Object({
    jwtToken: Type.String(),
});

const auth: FastifyPluginAsyncTypebox = async (fastify, opts) => {
    fastify.post("/", {
        schema: {
            body: Type.Ref(PersonWithPasswordSchema),
            response: {
                200: tokenSchema,
                400: Type.Ref(ErrorMessageSchema),
            },
            security: [],
        },

        handler: async function(request, reply) {
            const body = request.body;
            const result = await query(
                String.raw`
                INSERT
                    INTO people (name, surname, email, id, rut, password)
                    VALUES ($1, $2, $3, $4, $5, encrypt_password($6))
                        RETURNING id;`,
                [
                    body.person.name,
                    body.person.surname,
                    body.person.email,
                    body.person.id,
                    body.person.rut,
                    body.password,
                ],
            );
            if (result.rowCount !== 1) {
                return reply.code(400).send({ errorMessage: "Id already exists." });
            }
            const token = fastify.jwt.sign({ id: result.rows[0].id });
            return reply.code(200).send({ jwtToken: token });
        },
    });
};

export default auth;
