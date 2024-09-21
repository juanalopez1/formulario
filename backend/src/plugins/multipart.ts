import {
    fastifyMultipart,
    FastifyMultipartOptions,
    MultipartFile,
} from "@fastify/multipart";
import fp from "fastify-plugin";

export default fp<FastifyMultipartOptions>(async (fastify) => {
    await fastify.register(fastifyMultipart, {
        attachFieldsToBody: "keyValues",
        limits: {
            fieldNameSize: 100, // Max field name size in bytes
            fieldSize: 100, // Max field value size in bytes
            fields: 10, // Max number of non-file fields
            fileSize: 1000000, // For multipart forms, the max file size in bytes
            files: 1, // Max number of file fields
            headerPairs: 2000, // Max number of header key=>value pairs
            parts: 1000, // For multipart forms, the max number of parts (fields + files)
        },
        async onFile(part) {
            (part as MultipartFile & { value: any }).value = { ...part };
        },
    });
});
