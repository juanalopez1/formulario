import { Type } from "@sinclair/typebox";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import {
    ErrorMessageSchema,
    PersonWithPasswordSchema,
} from "../../../tipos/persona.js";
import { query } from "../../../services/database.js";
import { writeFileSync } from "fs";
import { join } from "path";

const tokenSchema = Type.Object({
    jwtToken: Type.String(),
});

const auth: FastifyPluginAsyncTypebox = async (fastify, opts) => {
    fastify.post("/", {
        schema: {
            consumes: ["multipart/form-data"],
            body: Type.Ref(PersonWithPasswordSchema),
            security: [],
        },

        handler: async function(request, reply) {
            const body = request.body;

            const filename = join(process.cwd(), "public", body.id);
            writeFileSync(filename, new Uint8Array(body.photo?.data));

            const result = await query(
                String.raw`
                INSERT
                    INTO people (name, surname, email, id, rut, password)
                    VALUES ($1, $2, $3, $4, $5, encrypt_password($6))
                        RETURNING id;`,
                [
                    body.name,
                    body.surname,
                    body.email,
                    body.id,
                    body.rut,
                    body.password,
                ],
            );
            if (result.rowCount !== 1) {
                return reply.code(400).send({ errorMessage: "Id already exists." });
            }
            const token = fastify.jwt.sign({ id: result.rows[0].id });
            return reply.code(200).send({ jwtToken: request.body.photo.data });
        },
    });
};

export default auth;
