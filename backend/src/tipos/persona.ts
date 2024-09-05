import { Static, Type } from "@sinclair/typebox";

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
    },
    {
        $id: "Person",
        title: "person",
    },
);

export const PersonWithPasswordSchema = Type.Object(
    {
        person: Type.Ref(PersonSchema),
        password: Type.String({
            minLength: 8,
            maxLength: 20,
            pattern: passwordRegex.source,
        }),
    },
    {
        $id: "PersonWithPassword",
        title: "personWithPassword",
    },
);

const simplifiedPerson = Type.Object({
    ...Type.Mapped(Type.KeyOf(PersonSchema), (k) => Type.String()).properties,
    rut: Type.Number(),
});
type SimplifiedPerson = Static<typeof simplifiedPerson>;

export const SpecificPersonWithPasswordCheckSchema = Type.Object({
    person: Type.Object({
        ...Type.Partial(simplifiedPerson).properties,
        // If we are to check the data from a specific person, then be must
        // be given their id.
        id: Type.String(),
    }),
    password: Type.Optional(Type.String()),
});

export const PersonWithOptionalFieldsSchema = Type.Object(
    {
        person: Type.Optional(
            Type.Partial(
                Type.Object({
                    ...simplifiedPerson.properties,
                }),
            ),
        ),
        password: Type.Optional(Type.String()),
    },
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

export const PersonWithPasswordCheckReturnSchema = Type.Object({
    person: Type.Optional(
        Type.Partial(
            Type.Mapped(
                Type.KeyOf(SpecificPersonWithPasswordCheckSchema.properties.person),
                (_) => Type.Ref(ErrorMessageSchema),
            ),
        ),
    ),
    password: Type.Optional(Type.Ref(ErrorMessageSchema)),
});

export type ErrorMessage = Static<typeof ErrorMessageSchema>;

export type PersonType = Static<typeof PersonSchema>;

export type PersonWithPasswordType = Static<typeof PersonWithPasswordSchema>;

export type PersonWithOptionalFields = Static<
    typeof PersonWithOptionalFieldsSchema
>;

export type SpecificPersonWithPasswordCheckType = Static<
    typeof SpecificPersonWithPasswordCheckSchema
>;

export type PersonWithPasswordCheckReturn = Static<
    typeof PersonWithPasswordCheckReturnSchema
>;

// Type tests
type AssertEqual<T, K> = T extends K ? (K extends T ? string : never) : never;

const test = <T>(_: T) => { };
test<AssertEqual<PersonType, SimplifiedPerson>>(
    "A simplified person should be the same as a person to typescript.",
);
