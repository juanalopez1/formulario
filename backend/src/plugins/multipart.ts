import { fastifyMultipart, FastifyMultipartOptions } from '@fastify/multipart'
import fp from 'fastify-plugin'

export default fp<FastifyMultipartOptions>(async (fastify) => {
    await fastify.register(fastifyMultipart, {
        attachFieldsToBody: 'keyValues'
    });
})
