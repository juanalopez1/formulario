import { hookPersonChecks, isEmpty, setErrorMessage } from "../checks.js";

/** @type {import('../checks.js').PersonHooks} */
const personHooks = {
    email: {
        input: document.querySelector("#email"),
        dataTransformer: (v) => v,
        handler: setErrorMessage(document.querySelector("#messageEmail")),
    },
    name: {
        input: document.querySelector("#name"),
        dataTransformer: (v) => v,
        handler: setErrorMessage(document.querySelector("#messageName")),
    },
    surname: {
        input: document.querySelector("#surname"),
        dataTransformer: (v) => v,
        handler: setErrorMessage(document.querySelector("#messageSurname")),
    },
    id: {
        input: document.querySelector("#id"),
        dataTransformer: (v) => v,
        handler: setErrorMessage(document.querySelector("#messageId")),
    },
    password: {
        input: document.querySelector("#psw1"),
        dataTransformer: (v) => v,
        handler: setErrorMessage(document.querySelector("#messageP1")),
    },
    rut: {
        input: document.querySelector("#rut"),
        dataTransformer: (v) => parseInt(v, 10),
        handler: setErrorMessage(document.querySelector("#messageRut")),
    },
    repeatPassword: {
        input: document.querySelector("#psw2"),
        dataTransformer: (v) => v,
        handler: setErrorMessage(document.querySelector("#messageP2")),
    },
};

const inputs = Object.values(personHooks).map((m) => m.input);

/** @type {HTMLButtonElement} */
const registerButton = document.querySelector("#registerButton");

hookPersonChecks(personHooks, (result) => {
    registerButton.disabled =
        !isEmpty(result) ||
        Object.values(personHooks).some((h) => h.input.value.length === 0);
});
