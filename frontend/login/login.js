import * as checks from "../checks.js";

/** @type {checks.PersonHooks} */
const hooks = {
    email: {
        input: document.getElementById("email"),
        handler: checks.setErrorMessage(document.getElementById("messageEmail")),
        dataTransformer: (value) => value,
    },
    password: {
        input: document.getElementById("psw1"),
        handler: checks.setErrorMessage(document.getElementById("messageP1")),
        dataTransformer: (value) => value,
    },
};

/** @type {HTMLButtonElement} */
const loginButton = document.getElementById("loginButton");

const hookInputs = Object.values(hooks).map((h) => h.input);

checks.hookPersonChecks(hooks, (result) => {
    loginButton.disabled =
        !checks.isEmpty(result) || hookInputs.some((i) => i.value === "");
});

/** @type {HTMLParagraphElement} **/
const helperMessage = document.getElementById("helperMessage");

loginButton.addEventListener("click", async (_) => {
    const allInputs = [...hookInputs, loginButton];

    try {
        for (const input of allInputs) {
            input.disabled = true;
        }

        const result = await fetch("https://localhost/backend/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: hooks.email.input.value,
                password: hooks.password.input.value,
            }),
        });

        const token = await result.json();
        console.log(token)

        if (result.ok) {
            console.log('entre')
            localStorage.setItem("token", JSON.stringify(token.jwtToken));
            const aimPage = sessionStorage.getItem("aimPage");
            sessionStorage.removeItem("aimPage");
            window.location.href = aimPage ?? "../personas";
        } else if (result.status === 404) {
            helperMessage.innerText = "No pudimos encontrarte";
            helperMessage.style.color = "red";
        } else {
            console.error(result);
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

const googleButton = document.getElementById('googleButton');
googleButton.addEventListener('click', () => {
    window.location.href = "https://localhost/backend/auth/login/google";
})
