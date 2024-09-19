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
};

const hookInputs = Object.values(personHooks).map((m) => m.input);

/** @type {HTMLButtonElement} */
const registerButton = document.querySelector("#registerButton");

hookPersonChecks(personHooks, (result) => {
    registerButton.disabled =
        !isEmpty(result) || hookInputs.some((i) => i.value.length === 0);
});

const helperMessage = document.getElementById("helperMessage");

registerButton.addEventListener("click", async () => {
    const allInputs = [...hookInputs, registerButton];
    try {
        for (const input of allInputs) {
            input.disabled = false;
        }

        const persona = {
            person: {
                name: personHooks.name.input.value,
                surname: personHooks.surname.input.value,
                id: personHooks.id.input.value,
                email: personHooks.email.input.value,
                rut: personHooks.rut.input.value,
            },
            password: personHooks.password.input.value,
        };

        const result = await fetch("https://localhost/backend/auth/register", {
            method: "POST",
            body: JSON.stringify(persona),
            headers: {
                "Content-Type": "application/json",
            },
        });

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
