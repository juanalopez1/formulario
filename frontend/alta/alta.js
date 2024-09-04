import { hookPersonChecks, setErrorMessage } from '../checks.js';

/** @type {import('../checks.js').PersonHooks} */
const personHooks = {
    "email": {
        "inputSelectorQuery": "#email",
        "dataTransformer": (v) => v,
        "handler": setErrorMessage("#messageEmail"),
    },
    "name": {
        "inputSelectorQuery": "#name",
        "dataTransformer": (v) => v,
        "handler": setErrorMessage("#messageName"),
    },
    "surname": {
        "inputSelectorQuery": "#surname",
        "dataTransformer": (v) => v,
        "handler": setErrorMessage("#messageSurname"),
    },
    "id": {
        "inputSelectorQuery": "#id",
        "dataTransformer": (v) => v,
        "handler": setErrorMessage("#messageId"),
    },
    "password": {
        "inputSelectorQuery": "#psw1",
        "dataTransformer": (v) => v,
        "handler": setErrorMessage("#messageP1"),
    },
    "rut": {
        "inputSelectorQuery": "#rut",
        "dataTransformer": (v) => parseInt(v, 10),
        "handler": setErrorMessage("#messageRut")
    },
};

hookPersonChecks(personHooks);

/** @type {HTMLInputElement} */
const pwd1 = document.getElementById("psw1");
/** @type {HTMLInputElement} */
const pwd2 = document.getElementById("psw2");
/** @type {HTMLEmbedElement} */
const textPwd2 = document.getElementById("messageP2")

function checkPasswords() {
    if (pwd1.value === pwd2.value) {
        textPwd2.innerText = "";
        return true;
    }

    textPwd2.innerText = "Las contraseñas no coinciden.";

    return false;
}

for (const element of [pwd1, pwd2]) {
    element.addEventListener("blur", checkPasswords);
}

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

    const result = await fetch("http://localhost:3000/personas", {
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
