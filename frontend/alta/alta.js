import { hookPersonChecks, isEmpty, setErrorMessage } from "../checks.js";
import { localStorageKeys, sessionStorageKeys } from "../utils.js";

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
    photo: {
        input: document.querySelector("#photo"),
        dataTransformer: (v) => v,
        handler: setErrorMessage(document.querySelector("#messagePhoto"))
    }
};

const hookInputs = Object.values(personHooks).map((m) => m.input);

/** @type {HTMLButtonElement} */
const registerButton = document.querySelector("#registerButton");

hookPersonChecks(personHooks, (result) => {
    console.log(result);
    registerButton.disabled =
        !isEmpty(result) || hookInputs.some((i) => i.value.length === 0);
});

const helperMessage = document.getElementById("helperMessage");

const altaForm = document.getElementById("altaForm");

registerButton.addEventListener("click", async () => {
    const allInputs = [...hookInputs, registerButton];
    try {
        for (const input of allInputs) {
            input.disabled = false;
        }

        const formData = new FormData(altaForm);

        console.log(formData);

        const result = await fetch("https://localhost/backend/auth/register", {
            headers: {
              ContentType: "multipart/form-data",
            },
            method: "POST",
            body: formData,
        });

        console.log(result);

        if (result.ok) {
            const token = await result.json();
            localStorage.setItem(
                localStorageKeys.jwtToken,
                token.jwtToken,
            );
            const aimPage = sessionStorage.getItem(sessionStorageKeys.aimPage);
            sessionStorage.removeItem(sessionStorageKeys.aimPage);
            window.location.href = aimPage ?? "../personas";
        } else {
            helperMessage.innerText = "Error al crear la cuenta.";
            helperMessage.style.color = "red";
        }
    } catch (e) {
        helperMessage.innerText = "Error de red";
        helperMessage.style.color = "red";
        console.error(e);
    } finally {
        for (const input of allInputs) {
            input.disabled = false;
        }
    }
});
