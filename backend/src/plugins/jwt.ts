import jwt, { FastifyJWTOptions } from '@fastify/jwt';
import { FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin'

const jwtOptions : FastifyJWTOptions = {
    secret : 'MYSUPERSECRET',
};

export default fp<FastifyJWTOptions> (async (fastify) =>  {
    fastify.register(jwt, jwtOptions);
    fastify.decorate("authenticate", async function(request: FastifyRequest, reply: FastifyReply) {
        try {
          await request.jwtVerify()
        } catch (err) {
          throw reply.unauthorized('Something went wrong')
        }
    })
})
    