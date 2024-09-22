import {
    fastifyMultipart,
    FastifyMultipartOptions,
    MultipartFile,
} from "@fastify/multipart";
import fp from "fastify-plugin";
import { ParsedFile } from "../tipos/persona.js";

export default fp<FastifyMultipartOptions>(async (fastify) => {
    await fastify.register(fastifyMultipart, {
        attachFieldsToBody: "keyValues",
        limits: {
            fieldNameSize: 100, // Max field name size in bytes
            fieldSize: 1024, // Max field value size in bytes
            fields: 30, // Max number of non-file fields
            // TODO: Fix hangups in 'large' files. We should also update the
            // checks function in the frontend whenever this value changes.
            fileSize: 1024 * 10, // For multipart forms, the max file size in bytes
            files: 1, // Max number of file fields
            parts: 1000, // For multipart forms, the max number of parts (fields + files)
        },

        async onFile(part) {
            (part as MultipartFile & { value: ParsedFile }).value = {
                toBuffer: part.toBuffer,
                file: part.file,
                filename: part.filename,
                mimetype: part.mimetype,
            };
        },
    });
});
