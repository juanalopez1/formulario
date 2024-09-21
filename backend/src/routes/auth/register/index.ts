import { Type } from "@sinclair/typebox";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import {
    ErrorMessageSchema,
    PersonCreationSchema,
    PersonWithPasswordType,
} from "../../../tipos/persona.js";
import { query } from "../../../services/database.js";
import fs from "fs";
import { join } from "path";
import { checkPersonStructure, createErrorMessageFromPersonStructure } from "../../../lib/personCheck.js";

const tokenSchema = Type.Object({
    jwtToken: Type.String(),
});
// TODO: Fix performance issues.

const auth: FastifyPluginAsyncTypebox = async (fastify, opts) => {
    fastify.post("/", {
        schema: {
            consumes: ["multipart/form-data"],
            body: Type.Intersect([Type.Ref(PersonCreationSchema)]),
            response: {
                200: tokenSchema,
            },
            security: [],
        },


        preHandler(request, reply) {
            const errors = createErrorMessageFromPersonStructure(request.body);
            if (errors !== undefined) {
                return reply.badRequest(errors);
            }
        },

        handler: async function (request, reply) {
            const body = request.body;
            const filename = join(process.cwd(), "public", body.id);

            if (body.photo !== undefined) {
                fastify.log.info(
                    `writing ${body.photo.filename} to ${filename}...`
                );
                await fs.promises.writeFile(filename, body.photo.file);
                fastify.log.info("Written!");
            }

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
                ]
            );
            if (result.rowCount !== 1) {
                return reply
                    .code(400)
                    .send({ errorMessage: "Id already exists." });
            }
            const token = fastify.jwt.sign({ id: result.rows[0].id });
            return reply.code(200).send({ jwtToken: token });
        },
    });
};

export default auth;
