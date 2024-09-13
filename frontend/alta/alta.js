import {
    hookPersonChecks,
    setErrorMessage
} from '../checks.js';

/** @type {import('../checks.js').PersonHooks} */
const personHooks = {
    "email": {
        "input": document.querySelector("#email"),
        "dataTransformer": (v) => v,
        "handler": setErrorMessage(document.querySelector("#messageEmail")),
    },
    "name": {
        "input": document.querySelector("#name"),
        "dataTransformer": (v) => v,
        "handler": setErrorMessage(document.querySelector("#messageName")),
    },
    "surname": {
        "input": document.querySelector("#surname"),
        "dataTransformer": (v) => v,
        "handler": setErrorMessage(document.querySelector("#messageSurname")),
    },
    "id": {
        "input": document.querySelector("#id"),
        "dataTransformer": (v) => v,
        "handler": setErrorMessage(document.querySelector("#messageId")),
    },
    "password": {
        "input": document.querySelector("#psw1"),
        "dataTransformer": (v) => v,
        "handler": setErrorMessage(document.querySelector("#messageP1")),
    },
    "rut": {
        "input": document.querySelector("#rut"),
        "dataTransformer": (v) => parseInt(v, 10),
        "handler": setErrorMessage(document.querySelector("#messageRut"))
    },
    "repeatPassword": {
        "input": document.querySelector("#psw2"),
        "dataTransformer": (v) => v,
        "handler": setErrorMessage(document.querySelector("#messageP2")),
    }
};

hookPersonChecks(personHooks);

document.getElementById('enviarButton').addEventListener('click', async () => {
    if (!checkPasswords()) {
        return;
    }

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const id = document.getElementById('id').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('psw1').value;
    const rut = document.getElementById('rut').value;

    const persona = {
        person: {
            name: name,
            surname: surname,
            id: id,
            email: email,
            rut: rut,
        },
        password: password,
    };

    const result = await fetch("http://localhost/backend/personas", {
        method: 'POST',
        body: JSON.stringify(persona),
        headers: {
            "Content-Type": 'application/json'
        },
    });

    if (result.ok) {
        window.location.href = "../personas/index.html";
    }
});
