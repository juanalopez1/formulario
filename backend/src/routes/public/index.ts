import {
    FastifyPluginAsyncTypebox,
    Type,
} from "@fastify/type-provider-typebox";
import { BinarySchema } from "../../tipos/persona.js";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pub: FastifyPluginAsyncTypebox = async (fastify, opts) => {
    fastify.get("/:id", {
        schema: {
            params: Type.Object({
                id: Type.String(),
            }),
            response: {
                200: BinarySchema,
            },
            security: []
        },
        handler: async (request, reply) => {
            try {
                return (await fs.promises.readFile(
                    __dirname + "/../../../public/" + request.params.id + ".img"
                ));
            } catch {
                return (await fs.promises.readFile(
                    __dirname + "/../../../public/default.png"
                ));
            }
        },
    });
};

export default pub;
