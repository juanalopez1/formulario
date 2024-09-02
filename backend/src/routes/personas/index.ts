import {
    PersonWithPasswordSchema,
    PersonSchema,
    PersonWithPasswordType,
} from "../../tipos/persona.js";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { Type } from "@sinclair/typebox";

const personas: PersonWithPasswordType[] = [
    {
        person: {
            name: "Juan",
            surname: "Pérez",
            email: "juan.perez@example.com",
            id: "3.456.789-0",
            rut: "123456789123",
        },
        password: "Juana123!",
    },
];

function checkID(id: string): boolean {
    const format = [
        {
            regex: /^\d\.\d{3}\.\d{3}-\d$/,
            message: "Debe ingresar la cédula con puntos y guiones.",
        },
    ];

    if (!format[0].regex.test(id)) {
        return false;
    }

    if (checkDigit(id) === false) {
        return false;
    }

    return true;
}

function checkDigit(id: string): boolean {
    id = id.replace(/\D/g, "");

    const digit = Number(id[id.length - 1]);
    const numero = id.slice(0, -1);
    const numeroArr = numero.split("").map((ch) => Number(ch));

    const coeficientes = [2, 9, 8, 7, 6, 3, 4];

    let sum = 0;

    for (let i = 0; i < 7; i++) {
        sum += numeroArr[i] * coeficientes[i];
    }

    const result = (10 - (sum % 10)) % 10;
    return digit === result;
}

function checkRut(rut: string): boolean {
    rut = rut.toString().trim();
    if (rut.length < 12) {
        return false;
    }

    if (checkDigitRUT(rut) === false) {
        return false;
    }

    return true;
}

function checkDigitRUT(rut: string) {
    rut.toString().split("");
    const digit = Number(rut[rut.length - 1]);
    const numero = rut
        .slice(0, 11)
        .split("")
        .map((c) => parseInt(c));

    const coeficientes = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;

    for (let i = 0; i < numero.length; i++) {
        sum += numero[i] * coeficientes[i];
    }

    const result = (11 - (sum % 11)) % 11;

    if (result < 10 && result === digit) {
        return true;
    }

    if (result === 11 && digit === 0) {
        return true;
    }

    return false;
}

const personaRoute: FastifyPluginAsyncTypebox = async (
    fastify,
    _opts,
): Promise<void> => {
    fastify.get("/", {
        schema: {
            response: {
                200: Type.Array(Type.Ref(PersonWithPasswordSchema)),
            },
        },
        handler: async function(request, reply) {
            return personas;
        },
    });

    fastify.post("/", {
        schema: {
            body: Type.Ref(PersonWithPasswordSchema),
            response: {
                200: Type.Ref(PersonWithPasswordSchema),
                400: Type.Union([
                    Type.Literal("Invalid ID"),
                    Type.Literal("Invalid RUT"),
                    Type.Literal("Id already exists"),
                ]),
            },
        },
        preHandler: async function(request, reply) {
            const personaPost = request.body;

            if (!checkID(personaPost.person.id)) {
                return reply.status(400).send("Invalid ID");
            }

            if (!checkRut(personaPost.person.rut)) {
                return reply.status(400).send("Invalid RUT");
            }

            const idAlreadyExists = personas.some(
                (val) => val.person.id === personaPost.person.id,
            );

            if (idAlreadyExists) {
                return reply.status(400).send("Id already exists");
            }
        },

        handler: async function(request, reply) {
            const personaPost = request.body;
            personas.push(personaPost);
            return personaPost;
        },
    });

    fastify.put("/:id", {
        schema: {
            params: Type.Object({
                id: PersonSchema.properties.id,
            }),
            body: Type.Object({
                newValue: Type.Ref(PersonWithPasswordSchema),
                oldPassword: PersonWithPasswordSchema.properties.password,
            }),
            response: {
                200: Type.Ref(PersonWithPasswordSchema),
                404: Type.Literal("Couldn't find Id"),
                // TODO: This allows for other error messages to show. We should
                // find a more ergonomic way to do this. The hard bit will be
                // keeping type safety, I assume that will take some generic
                // wizardry. - cr
                400: Type.Union([
                    // TODO: Also, the other literals arent in json. we should
                    // fix that.
                    Type.Object({ message: Type.Literal("Incorrect password") }),
                    Type.Object({
                        statusCode: Type.Number(),
                        code: Type.String(),
                        error: Type.String(),
                        message: Type.String(),
                    })]),
            },
        },

        preHandler: async function(request, reply) {
            const person = personas.find(
                (person) => person.person.id === request.params.id,
            );

            if (person === undefined) {
                return reply.status(404).send("Couldn't find Id");
            }

            const passwordIsCorrect = person.password === request.body.oldPassword;
            console.log(person.password, request.body.oldPassword);

            if (!passwordIsCorrect) {
                return reply.code(400).send({ message: "Incorrect password" });
            }
        },

        handler: async function(request, reply) {
            const personIndex = personas.findIndex(
                (person) => person.person.id === request.params.id,
            )!;
            personas[personIndex] = request.body.newValue;
            return request.body.newValue;
        },
    });
};

export default personaRoute;
