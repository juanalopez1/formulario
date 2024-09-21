import { Value } from "@sinclair/typebox/value";

import {
    ErrorMessage,
    PersonSchema,
    PersonWithOptionalFields,
    PersonWithPasswordCheckReturn,
} from "../tipos/persona.js";

import { match } from "./utils.js";

export function createErrorMessageFromPersonStructure(
    personWithPassword: PersonWithOptionalFields
): string | undefined {
    const errors = checkPersonStructure(personWithPassword);
    if (Object.values(errors).length !== 0) {
        return Object.entries(errors)
            .map(([key, val]) => key + ": " + val.errorMessage)
            .join(";");
    }
}

/**
 * This function checks whether the given person matches our static checks.
 * It does not query the database, only validates data.
 */
export function checkPersonStructure(
    personWithPassword: PersonWithOptionalFields
): PersonWithPasswordCheckReturn {
    const output: PersonWithPasswordCheckReturn = {};

    match<keyof typeof personWithPassword>({
        name() {
            if (personWithPassword.name === undefined) {
                return;
            }

            const length = personWithPassword.name.length;
            const min = PersonSchema.properties.name.minLength;
            const max = PersonSchema.properties.name.maxLength;

            if (min && length < min) {
                output.name = {
                    errorMessage: `Mínimo de ${min} caracteres.`,
                };
            }

            if (max && length > max) {
                output.name = {
                    errorMessage: `Máximo de ${max} caracteres.`,
                };
            }
        },
        surname() {
            if (personWithPassword.surname === undefined) {
                return;
            }

            const surnameLength = personWithPassword.surname.length;
            const surnameMin = PersonSchema.properties.surname.minLength;
            const surnameMax = PersonSchema.properties.surname.maxLength;

            if (surnameMin && surnameLength < surnameMin) {
                output.surname = {
                    errorMessage: `Mínimo de ${surnameMin}`,
                };
            }

            if (surnameMax && surnameLength > surnameMax) {
                output.surname = {
                    errorMessage: `Máximo de ${surnameMax}`,
                };
            }
        },
        email() {
            if (personWithPassword.email === undefined) {
                return;
            }

            if (
                !Value.Check(
                    PersonSchema.properties.email,
                    personWithPassword.email
                )
            ) {
                output.email = { errorMessage: "Email inválido." };
            }
        },
        id() {
            if (personWithPassword.id === undefined) {
                return;
            }

            const idCheck = checkID(personWithPassword.id);

            if (idCheck) {
                output.id = idCheck;
            }
        },
        rut() {
            if (personWithPassword.rut === undefined) {
                return;
            }
            const rutCheck = checkRut(personWithPassword.rut);

            if (rutCheck) {
                output.rut = rutCheck;
            }
        },

        password() {
            if (personWithPassword.password === undefined) {
                return;
            }
            const regexChecks = [
                [/[a-z]/, "La contraseña debe contener minúsculas."],
                [/[A-Z]/, "La contraseña debe contener mayúsculas."],
                [/\d/, "La contraseña debe contener dígitos."],
                [
                    /[@$!%*?&]/,
                    'La contraseña debe contener alguno de "@$!%*?&".',
                ],
                [
                    /^[A-Za-z\d@$!%*?&]*$/,
                    "La contraseña contiene caracteres ilegales.\n" +
                    "Solo puede contener letras, dígitos y @$!%*?&.",
                ],
                [/^.{8}.*$/, "Mínimo de 8 caracteres."],
                [/^.{0,20}$/, "Máximo de 20 caracteres."],
            ] as const;

            for (const [regex, message] of regexChecks) {
                if (!regex.test(personWithPassword.password!)) {
                    output.password = { errorMessage: message };
                }
            }
        },
        repeatPassword() {
            const { password, repeatPassword } = personWithPassword;
            if (repeatPassword === undefined || password === repeatPassword) {
                return;
            }

            output.repeatPassword = {
                errorMessage: "Las contraseñas no coinciden",
            };
        },
    });

    return output;
}

function checkID(id: string): ErrorMessage | undefined {
    const pattern = PersonSchema.properties.id.pattern;

    if (pattern && !new RegExp(pattern).test(id)) {
        return {
            errorMessage: "Debe ingresar la cédula con puntos y guiones.",
        };
    }

    if (checkDigit(id) === false) {
        return { errorMessage: "Cédula inválida" };
    }

    return undefined;
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

function checkRut(rut: number): ErrorMessage | undefined {
    const stringifiedRut = rut.toString(10);
    if (stringifiedRut.length !== 12) {
        return {
            errorMessage: "Un rut debe tener 12 dígitos.",
        };
    }

    return checkDigitRUT(stringifiedRut)
        ? undefined
        : { errorMessage: "Rut inválido." };
}

function checkDigitRUT(rut: string): boolean {
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
    return result === digit || (result === 10 && digit === 0);
}
