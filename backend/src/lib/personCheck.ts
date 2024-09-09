import { Value } from "@sinclair/typebox/value";

import {
    ErrorMessage,
    PersonSchema,
    PersonWithOptionalFields,
    PersonWithPasswordCheckReturn,
} from "../tipos/persona.js";

import { exhaustiveMatch, typeSafeKeys } from "./utils.js";

export function checkPersonStructureIntoArray(
    personWithPassword: PersonWithOptionalFields) {
    const err = checkPersonStructure(personWithPassword);
    const err_constructor: ErrorMessage[] = [];

    for (const key of typeSafeKeys(err)) {
        exhaustiveMatch(key, {
            person: () => {
                for (const key of typeSafeKeys(err.person!)) {
                    if (err.person![key]) {
                        err_constructor.push(err.person![key]);
                    }
                }
            },
            password:
                () => { err_constructor.push(err.password!); }
        });
    };

    return err_constructor;
}

/**
 * This function checks whether the given person matches our static checks.
 * It does not query the database, only validates data.
 */
export function checkPersonStructure(
    personWithPassword: PersonWithOptionalFields,
): PersonWithPasswordCheckReturn {
    const output: PersonWithPasswordCheckReturn = {};

    const keys = typeSafeKeys(personWithPassword);
    for (const key of keys) {
        exhaustiveMatch(key, {
            person: () => {
                const personKeys = typeSafeKeys(personWithPassword.person!);

                for (const key of personKeys) {
                    const errorFound = exhaustiveMatch(key, {
                        name: () => {
                            const length
                                = personWithPassword.person!.name!.length;
                            const min = PersonSchema.properties.name.minLength;
                            const max = PersonSchema.properties.name.maxLength;

                            if (min && length < min) {
                                output.person ??= {};
                                output.person.name = {
                                    errorMessage:
                                        `Mínimo de ${min} caracteres.`,
                                };
                                return true;
                            }

                            if (max && length > max) {
                                output.person ??= {};
                                output.person.name = {
                                    errorMessage:
                                        `Máximo de ${max} caracteres.`,
                                };
                                return true;
                            }
                        },
                        surname: () => {
                            const surnameLength
                                = personWithPassword.person!.surname!.length;
                            const surnameMin
                                = PersonSchema.properties.surname.minLength;
                            const surnameMax
                                = PersonSchema.properties.surname.maxLength;

                            if (surnameMin && surnameLength < surnameMin) {
                                output.person ??= {};
                                output.person.surname = {
                                    errorMessage: `Mínimo de ${surnameMin}`,
                                };
                                return true;
                            }

                            if (surnameMax && surnameLength > surnameMax) {
                                output.person ??= {};
                                output.person.surname = {
                                    errorMessage: `Máximo de ${surnameMax}`,
                                };
                                return true;
                            }
                        },
                        email: () => {
                            if (!Value.Check(
                                PersonSchema.properties.email,
                                personWithPassword.person!.email,
                            )) {
                                output.person ??= {};
                                output.person.email = {
                                    errorMessage: "Email inválido."
                                };
                                return true;
                            }
                        },
                        id: () => {
                            const idCheck
                                = checkID(personWithPassword.person!.id!);

                            if (idCheck) {
                                output.person ??= {};
                                output.person.id = idCheck;
                                return true;
                            }
                        },
                        rut: () => {
                            console.log("arriba", checkRut(personWithPassword.person!.rut!))
                            const rutCheck
                                = checkRut(personWithPassword.person!.rut!);

                            if (rutCheck) {
                                console.log("entre al if")
                                output.person ??= {};
                                output.person.rut = rutCheck;
                                return true;
                            }
                        },
                    });

                    if (errorFound) {
                        continue;
                    }

                    const val = personWithPassword.person![key]!;
                    if (val !== undefined
                        && !Value.Check(
                            PersonSchema.properties[key],
                            val,
                        )) {
                        output.person ??= {};
                        output.person[key] = {
                            errorMessage: "Dato inválido",
                        };
                    }
                }
            },
            password: () => {
                const regexChecks = [
                    [/[a-z]/, "La contraseña debe contener minúsculas."],
                    [/[A-Z]/, "La contraseña debe contener mayúsculas."],
                    [/\d/, "La contraseña debe contener dígitos."],
                    [
                        /[@$!%*?&]/,
                        'La contraseña debe contener alguno de "@$!%*?&".'
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
        });


    }

    return output;
}

function checkID(id: string): ErrorMessage | undefined {
    const pattern = PersonSchema.properties.id.pattern;

    if (pattern && !new RegExp(pattern).test(id)) {
        return { errorMessage: "Debe ingresar la cédula con puntos y guiones." };
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
    console.log(rut);
    if (stringifiedRut.length !== 12) {
        return {
            errorMessage: "Un rut debe tener 12 dígitos.",
        };
    }


    return checkDigitRUT(stringifiedRut) ? undefined
        : { errorMessage: "Rut inválido." };
}

function checkDigitRUT(rut: string): boolean {
    const digit = Number(rut[rut.length - 1]);
    const numero = rut.slice(0, 11).split("").map((c) => parseInt(c));

    const coeficientes = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;

    for (let i = 0; i < numero.length; i++) {
        sum += numero[i] * coeficientes[i];
    }

    const result = (11 - (sum % 11)) % 11;
    return ((result === digit) || (result === 10 && digit === 0));
}

