import { Static, TSchema, Type } from "@sinclair/typebox";
import { ensureType } from "../lib/utils.js";

// Expresión regular para el correo electrónico
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Expresión regular para la contraseña
const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

// Expresión regular para el formato de cédula
const idRegex = /^[1-9]{1}\.[0-9]{3}\.[0-9]{3}-[0-9]{1}$/;

// Expresión regular para el formato del RUT
// const rutRegex = /^\d{12}$/;

export const PersonSchema = Type.Object(
    {
        name: Type.String({ minLength: 3, maxLength: 20 }),
        surname: Type.String({ minLength: 3, maxLength: 20 }),
        email: Type.String({
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.source,
        }),
        id: Type.String({ pattern: idRegex.source }),
        rut: Type.Number({ minimum: 100000000000, maximum: 999999999999 }),
        photo: Type.Any(),
    },
    {
        $id: "Person",
        title: "person",
    },
);

export const PersonWithPasswordSchema = Type.Intersect(
    [
        PersonSchema,
        Type.Object({
            password: Type.String({
                minLength: 8,
                maxLength: 20,
                pattern: passwordRegex.source,
            }),
        }),
    ],
    {
        $id: "PersonWithPassword",
        title: "personWithPassword",
    },
);

const simplifiedPerson = Type.Omit(
    Type.Intersect([
        Type.Omit(
            Type.Mapped(Type.KeyOf(PersonSchema), (_) => Type.String()),
            ensureType<(keyof PersonType)[]>()(["rut"]),
        ),
        Type.Object(
            ensureType<{ [K in keyof PersonType]?: TSchema }>()({
                rut: Type.Number(),
            }),
        ),
    ]),
    ensureType<(keyof PersonType)[]>()(["photo"]),
);

export const PersonToCheckSchema = Type.Partial(
    Type.Intersect([
        Type.Optional(Type.Partial(simplifiedPerson)),
        Type.Object({
            password: Type.String(),
            repeatPassword: Type.String(),
        }),
    ]),
    {
        $id: "optionalPerson",
        title: "Persona con campos opcionales.",
    },
);

export const ErrorMessageSchema = Type.Object(
    {
        errorMessage: Type.String(),
    },
    {
        title: "An error message",
        $id: "errorMessage",
    },
);

export const PersonWithPasswordCheckReturnSchema = Type.Partial(
    Type.Mapped(Type.KeyOf(PersonToCheckSchema), (_) =>
        Type.Ref(ErrorMessageSchema),
    ),
);

export type ErrorMessage = Static<typeof ErrorMessageSchema>;

export type PersonType = Static<typeof PersonSchema>;

export type PersonWithPasswordType = Static<typeof PersonWithPasswordSchema>;

export type PersonWithOptionalFields = Static<typeof PersonToCheckSchema>;

export type PersonWithPasswordCheckReturn = Static<
    typeof PersonWithPasswordCheckReturnSchema
>;

// Type tests
type AssertEqual<T, K> = T extends K ? (K extends T ? string : never) : never;

const test = <T>(_: T) => { };
test<AssertEqual<Omit<PersonType, "photo">, Static<typeof simplifiedPerson>>>(
    "A simplified person should be the same as a person, excluding their photo, to typescript.",
);
