/** @typedef {{errorMessage: string}} ErrorMessage */

/** @typedef {object} ErrorMessageHook
 * @property {(err: ErrorMessage) => unknown} handler
 * @property {(data: string) => string | number} dataTransformer
 * @property {string} inputSelectorQuery
 */

/** @typedef {object} PersonHooks
 * @property {ErrorMessageHook} [email]
 * @property {ErrorMessageHook} [name]
 * @property {ErrorMessageHook} [surname]
 * @property {ErrorMessageHook} [id]
 * @property {ErrorMessageHook} [password]
 * @property {ErrorMessageHook} [rut]
 */

/** @param {PersonHooks} hooks */
export async function hookPersonChecks(hooks) {
    // For every element passed, in in their blur notify everyone whether their
    // values are still correct.
    /** @type {(element: HTMLInputElement) => void} */
    const listener = async (element) => {
        const values = {
            person: {}
        };

        for (const key in hooks) {
            if (hooks.hasOwnProperty(key)) {
                /** @type {ErrorMessageHook} */
                const hook = hooks[key];

                /** @type {HTMLInputElement} */
                const element = document.querySelector(hook.inputSelectorQuery)

                if (element && !element.value) {
                    continue;
                }

                if (key === "password") {
                    values.password = hook.dataTransformer(element.value);
                } else {
                    values.person[key] = hook.dataTransformer(element.value);
                }
            }
        }

        console.log("send", JSON.stringify(values))
        const result = await (await fetch("http://localhost:3000/personas/check", {
            body: JSON.stringify(values),
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            }
        })).json();
        console.log("receive", result);


        console.log(hooks.rut);
        for (const key in hooks) {
            if (hooks.hasOwnProperty(key)) {
                /** @type {ErrorMessageHook} */
                const hook = hooks[key];

                const errToHandle = key === "password" ? result[key] : result.person?.[key];

                hook.handler(errToHandle ?? "");
            }
        }
    };

    // Add listener
    for (const key in hooks) {
        if (hooks.hasOwnProperty(key)) {
            /** @type {ErrorMessageHook} */
            const hook = hooks[key];

            /** @type {HTMLInputElement | null} */
            const element = document.querySelector(hook.inputSelectorQuery);

            if (element === null) {
                console.error("Invalid id: " + hook.inputSelectorQuery);
                return;
            }

            element.addEventListener("blur", listener)
        }
    }
}

/**
 * @param {string} selector
 */
function setErrorMessage(selector) {
    /**
     * @param {ErrorMessage | undefined} err
     */
    return function(err) {
            console.log(selector, err);
        if (err !== undefined) {
            const element = document.querySelector(selector);
            console.log(selector, element);
            element.innerText = err?.errorMessage ?? "";
        }
    };
}

/** @type {PersonHooks} */
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

document.getElementById('enviarButton').addEventListener('click', async () => {
    const dataIsOk = checks.every((check) =>
        check.checker(document.getElementById(check.inputId).value).valid
    );

    if (dataIsOk) {
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

        await fetch("http://localhost:3000/personas", {
            method: 'POST',
            body: JSON.stringify(persona),
            headers: {
                "Content-Type": 'application/json'
            },
        });

        window.location.href = "../personas/index.html";
    }
});
