import * as checks from "../checks.js";

/** @type {checks.PersonHooks} **/
const hooks = {
    name: {
        input: document.getElementById("voidName"),
        handler: checks.setErrorMessage("messageName"),
        dataTransformer: (v) => v,
    },
    id: {
        input: document.getElementById("voidId"),
        handler: checks.setErrorMessage("messageId"),
        dataTransformer: (v) => v,
    },
    rut: {
        input: document.getElementById("voidRut"),
        handler: checks.setErrorMessage("messageRut"),
        dataTransformer: (v) => parseInt(v),
    },
    email: {
        input: document.getElementById("voidEmail"),
        handler: checks.setErrorMessage("messageEmail"),
        dataTransformer: (v) => v,
    },
    surname: {
        input: document.getElementById("voidSurname"),
        handler: checks.setErrorMessage("messageSurname"),
        dataTransformer: (v) => v,
    },
    password: {
        input: document.getElementById("voidpsw1"),
        handler: checks.setErrorMessage("messageP1"),
        dataTransformer: (v) => v,
    },
    repeatPassword: {
        input: document.getElementById("voidpsw2"),
        handler: checks.setErrorMessage("messageP2"),
        dataTransformer: (v) => v,
    },
};

checks.hookPersonChecks(hooks);
