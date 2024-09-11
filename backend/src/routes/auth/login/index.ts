import { Type } from "@sinclair/typebox";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { ErrorMessageSchema, PersonSchema, PersonWithPasswordSchema } from "../../../tipos/persona.js";
import { query } from "../../../services/database.js";

const auth : FastifyPluginAsyncTypebox = async (fastify, opts) => {
    fastify.post('/login', {
        schema: {
            body: Type.Object({
                email:  PersonSchema.properties.email,
                password: PersonWithPasswordSchema.properties.password
            }),
            response: {
                200: Type.Object({
                    jwtToken: Type.String(),
                }),
                404:ErrorMessageSchema,
            }
        },

        handler: async function (request,reply) {
            const result = await query(`
                SELECT id
                FROM people
                WHERE email = $1
                AND check_password(password, $2);
            `, [request.body.email, request.body.password]);
            if(result.rowCount !== 1){
                return reply.code(404).send({errorMessage: 'Wrong email or password'});
            }
            const token = fastify.jwt.sign({id: result.rows[0].id});
            return reply.code(200).send({jwtToken: token})
    
        }
    });
};

console.log(auth)