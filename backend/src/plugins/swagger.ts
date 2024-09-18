import { FastifySwaggerOptions } from "@fastify/swagger";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import fp from "fastify-plugin";

export default fp<FastifySwaggerOptions>(async (fastify, opts) => {
    await fastify.register(swagger, {
        openapi: {
            openapi: "3.0.0",
            info: {
                title: "People API",
                description: "For people who do stuff.",
                version: "0.1.0",
            },
            components: {
                securitySchemes: {
                    bearerAuth: {
                        type: "http",
                        scheme: "bearer",
                        bearerFormat: "JWT",
                    },
                },
            },
            servers: [
                {
                    url: "https://localhost/backend",
                    description: "Development server",
                },
            ],
            security: [{ bearerAuth: []}],
        },
    });

    await fastify.register(swaggerUi, {
        routePrefix: "docs",
        uiConfig: {
            docExpansion: "full",
            deepLinking: false,
        },
        uiHooks: {
            onRequest: function(request, reply, next) {
                next();
            },
            preHandler: function(request, reply, next) {
                next();
            },
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
        transformSpecification: (swaggerObject, request, reply) => {
            return swaggerObject;
        },
        transformSpecificationClone: true,
    });
});
