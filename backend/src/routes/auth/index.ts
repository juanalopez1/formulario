import { Type } from "@sinclair/typebox";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import {
    ErrorMessageSchema,
    PersonSchema,
    PersonToCheckSchema,
    PersonWithPasswordCheckReturnSchema,
    PersonWithPasswordSchema,
} from "../../tipos/persona.js";
import { query } from "../../services/database.js";
import { checkPersonStructure } from "../../lib/personCheck.js";
import { join } from "path";
import { writeFileSync } from "fs";

const tokenSchema = Type.Object({
    jwtToken: Type.String(),
});

const auth: FastifyPluginAsyncTypebox = async (fastify, opts) => {
    fastify.post("/login", {
        schema: {
            body: Type.Object({
                email: PersonSchema.properties.email,
                password: PersonWithPasswordSchema.properties.password,
            }),
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

    fastify.post("/register", {
        schema: {
            consumes: ["multipart/form-data"],
            body: Type.Ref(PersonWithPasswordSchema),
            response: {
                200: tokenSchema,
                400: Type.Ref(ErrorMessageSchema),
            },
            security: [],
        },

        handler: async function(request, reply) {
            const body = request.body;

            if (body.person.photo) {
                const fileBuffer = body.person.photo._buf as Buffer;
                const filename = join(process.cwd(), "public", body.person.photo.filename);
                writeFileSync(filename, fileBuffer);
            }
            
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

    /* el de antes
    fastify.post("/register", {
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
    });*/

    fastify.post("/check", {
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
