import { FastifyReply, FastifyRequest } from 'fastify'
import { OAuth2Namespace } from '@fastify/oauth2';

export interface authenticateFunction {
    (request: FastifyRequest, reply: FastifyReply) : Promise<void>;
}

declare module 'fastify' {
    interface FastifyInstance{
        authenticate: authenticateFunction,
        googleOAuth2: OAuth2Namespace;
    }
}