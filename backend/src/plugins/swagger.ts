import fastifySwagger from "@fastify/swagger";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import swaggerui from "@fastify/swagger-ui"

const root: FastifyPluginAsyncTypebox = async (fastify, _options) => {
    fastify.register(fastifySwagger, {
        openapi: {
            openapi: "3.0.0",
            info: {
                title: "Personas API",
                description: "Testing the Fastify swagger API",
                version: "0.1.0",
            },
            servers: [
                {
                    url: "http://localhost:3000",
                    description: "Development server",
                },
            ],
            tags: [
                { name: "people", description: "people related endpoints." }
            ],
            components: {
                securitySchemes: {
                    //apiKey: {
                    //    type: "apiKey",
                    //    name: "apiKey",
                    //    in: "header",
                    //},
                },
            },
            //externalDocs: {
            //    url: "https://swagger.io",
            //    description: "Find more info here",
            // },
        },
        "hideUntagged": false,
    });

    fastify.register(swaggerui, {
        routePrefix: '/docs',
        uiConfig: {
            docExpansion: 'full',
            deepLinking: false
        },
        uiHooks: {
            onRequest: function(request, reply, next) { next() },
            preHandler: function(request, reply, next) { next() }
        },
    })
};

export default root;
