import { Static, Type } from "@sinclair/typebox";
import { FastifyPluginAsync } from "fastify";
import { FastifyInstance } from "fastify/types/instance.js";
import { join } from "path";
import { writeFileSync } from "fs";
import { PersonToCheckSchema, PersonWithPasswordCheckReturnSchema } from "../../../tipos/persona.js";

const FormSchema = Type.Object(
  {
    name: Type.Object(
      {
        type: Type.Literal("field"),
        fieldname: Type.String(),
        mimetype: Type.String(),
        encoding: Type.String(),
        value: Type.String(),
        fieldnameTruncated: Type.Boolean(),
        valueTruncated: Type.Boolean(),
      },
      { additionalProperties: false }
    ),
    email: Type.Object(
      {
        type: Type.Literal("field"),
        fieldname: Type.String(),
        mimetype: Type.String(),
        encoding: Type.String(),
        value: Type.String(),
        fieldnameTruncated: Type.Boolean(),
        valueTruncated: Type.Boolean(),
      },
      { additionalProperties: false }
    ),
    photo: Type.Object(
      {
        type: Type.Literal("file"),
        fieldname: Type.String(),
        filename: Type.String(),
        encoding: Type.String(),
        mimetype: Type.String(),
        file: Type.Object({}), // Para manejar el FileStream
        _buf: Type.Object({}),
      },
      { additionalProperties: false }
    ),
  },
  { additionalProperties: false }
);

type Form = Static<typeof FormSchema>;

const multipartPersonaRoute: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts
): Promise<void> => {
    fastify.post("/", {
        // The token is not required for this route.
        onRequest: undefined,
        schema: {
            consumes: ["multipart/form-data"],
            body: Type.Ref(PersonToCheckSchema),
            response: {
                200: PersonWithPasswordCheckReturnSchema,
                400: Type.Object({
                    statusCode: Type.Number(),
                    code: Type.String(),
                    error: Type.String(),
                    message: Type.String(),
                }),
            },
        },

        handler: async (request, reply) => {
            const body = request.body as Form;
            const fileBuffer = body.photo._buf as Buffer;
            const filename = join(process.cwd(), "public", body.photo.filename);
            writeFileSync(filename, fileBuffer);
            return reply.code(200).send(body);
        },
    });
};

export default multipartPersonaRoute;
