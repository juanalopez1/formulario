import { Type } from "@sinclair/typebox";
import { PersonSchema, PersonWithPasswordSchema } from "../../tipos/persona.js";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const auth : FastifyPluginAsyncTypebox = async (fastify, opts) : Promise<void> => {
    fastify.post('/login', {
        schema: {
            body: Type.Object({
                email:  PersonSchema.properties.email,
                password: PersonWithPasswordSchema.properties.password
            }),
        },

        handler: async function (request,reply) {
            if(request.body.email !== 'juanaxlopez1@gmail.com' || request.body.password !== 'Juana123!'){
                reply.unauthorized("Invalid email or password");
            }
            const token = fastify.jwt.sign({algo:'algo'}); // ese algo es el payload!!! 
            // validar el token va en onrequest
            reply.send({token})
        }
    });
};