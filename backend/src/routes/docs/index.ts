import fastifySwagger from "@fastify/swagger";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const root: FastifyPluginAsyncTypebox = async (fastify, _options) => {
    fastify.register(fastifySwagger, {
        openapi: {
            openapi: "3.0.0",
            info: {
                title: "Test swagger",
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
                { name: "user", description: "User related end-points" },
                { name: "code", description: "Code related end-points" },
            ],
            components: {
                securitySchemes: {
                    apiKey: {
                        type: "apiKey",
                        name: "apiKey",
                        in: "header",
                    },
                },
            },
            externalDocs: {
                url: "https://swagger.io",
                description: "Find more info here",
            },
        },
    });
};

export default root;
