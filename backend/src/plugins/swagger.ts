import swagger, { SwaggerOptions } from '@fastify/swagger';
import fp from 'fastify-plugin'
import swaggerui from '@fastify/swagger-ui';

const options : SwaggerOptions = {
    openapi: {
        openapi: '3.0.0',
        info: {
          title: 'Test swagger',
          description: 'Testing the Fastify swagger API',
          version: '0.1.0'
        },
        servers: [
          {
            url: 'http://localhost/backend',
            description: 'Development server'
          }
        ],
        tags: [
          { name: 'persona', description: 'persona description' },
          { name: 'code', description: 'Code related end-points' }
        ],
        components: {
          securitySchemes: {
            apiKey: {
              type: 'apiKey',
              name: 'apiKey',
              in: 'header'
            }
          }
        },
        externalDocs: {
          url: 'https://swagger.io',
          description: 'Find more info here'
        }
      }
};

export default fp<SwaggerOptions>(async (fastify) => {
    await fastify.register(swagger, options);
    await fastify.register(swaggerui, {
        routePrefix: 'docs',
        uiConfig: {
          docExpansion: 'full',
          deepLinking: false
        },
        uiHooks: {
          onRequest: function (request, reply, next) { next() },
          preHandler: function (request, reply, next) { next() }
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
        transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
        transformSpecificationClone: true
    })
})