import { Static, Type } from "@sinclair/typebox";

// Expresión regular para el correo electrónico
// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Expresión regular para la contraseña
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

// Expresión regular para el formato de cédula
const cedulaRegex = /^[1-9]{1}\.[0-9]{3}\.[0-9]{3}-[0-9]{1}$/;

// Expresión regular para el formato del RUT
const rutRegex = /^\d{12}$/;

// Expresión regular para el formato del correo
const mailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// TODO: Update all properties to match the checks in the frontend, or the
// other way around.
export const PersonaSchema = Type.Object(
  {
    nombre: Type.String({ minLength: 3, maxLength: 20 }),
    apellido: Type.String({ minLength: 3, maxLength: 20 }),
    email: Type.String({ pattern: mailRegex.source }),
    cedula: Type.String({ pattern: cedulaRegex.source }),
    rut: Type.String({ pattern: rutRegex.source }),
  },
  {
    $id: "Person",
    title: "person",
  },
);

export const PersonaPostSchema = Type.Object(
  {
    // TODO: Think if we should save this info as a ref instead of copying.
    person: Type.Ref(PersonaSchema),
    contraseña: Type.String({
      minLength: 8,
      maxLength: 20,
      pattern: passwordRegex.source,
    }),
    repetirContraseña: Type.String({
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

export type PersonaType = Static<typeof PersonaSchema>;
export type PersonaPostType = Static<typeof PersonaPostSchema>;
