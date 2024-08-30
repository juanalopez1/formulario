import { PersonaPostSchema, PersonaSchema, PersonaType } from "../../tipos/persona.js";
import { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { Type } from "@sinclair/typebox";

const personas: PersonaType[] = [
    {
        nombre: "Juan",
        apellido: "Pérez",
        email: "juan.perez@example.com",
        cedula: "3.456.789-0",
        rut: "123456789123",
    },
];

function checkID(id : string) : boolean {
    const format = [{
        regex: /^\d\.\d{3}\.\d{3}-\d$/,
        message: 'Debe ingresar la cédula con puntos y guiones.'
    }]

    if (!format[0].regex.test(id)) {
        return false;
    }

    if (checkDigit(id) === false) {
        return false;
    }

    return true;
}

function checkDigit(id : string) : boolean {
    id = id.replace(/\D/g, '');

    const digit = Number(id[id.length - 1]);
    const numero = id.slice(0, -1);
    const numeroArr = numero.split('').map((ch) => Number(ch));

    const coeficientes = [2, 9, 8, 7, 6, 3, 4];

    let sum = 0;

    for (let i = 0; i < 7; i++) {
        sum += numeroArr[i] * coeficientes[i];
    }

    const result = (10 - (sum % 10)) % 10;
    return digit === result;
}

function checkRut(rut : string) : boolean {
    rut = rut.toString().trim()
    if (rut.length < 12) {
        return false;
    }

    if (checkDigitRUT(rut) === false) {
        return false;
    }

    return true;
}

function checkDigitRUT(rut : string) {
    rut.toString().split('')
    const digit = Number(rut[rut.length - 1]);
    const numero = rut.slice(0, 11).split('').map(c => parseInt(c));

    const coeficientes = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;

    for (let i = 0; i < numero.length; i++) {
        sum += numero[i] * coeficientes[i];
    }

    const result = (11 - (sum % 11)) % 11;

    if (result < 10 && result === digit) {
        return true
    };

    if (result === 11 && digit === 0) {
        return true
    };

    return false

}

const personaRoute: FastifyPluginAsyncTypebox = async (
    fastify,
    _opts,
): Promise<void> => {
    fastify.get("/", {
        schema: {
            response: {
                200: Type.Array(Type.Ref(PersonaSchema)),
            },
        },
        handler: async function(request, reply) {
            return personas;
        },
    });

    fastify.post("/", {
        // TODO: Specify the response.
        schema: {
            body: Type.Ref(PersonaPostSchema),
            response: {
                200: Type.Ref(PersonaPostSchema),
                400: Type.Union([
                    Type.Literal("Invalid ID"),
                    Type.Literal("Invalid RUT"),
                ]),
            }
        },
        handler: async function(request, reply) {
            const personaPost = request.body;
            if(!checkID(personaPost.person.cedula)){
                return reply.badRequest('Invalid ID')
            }
            if(!checkRut(personaPost.person.rut)){
                return reply.badRequest('Invalid RUT')
            }

            personas.push(personaPost.person);
            return personaPost;
            
        },
    });
};

export default personaRoute;
