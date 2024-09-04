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

        const result = await (await fetch("http://localhost:3000/personas/check", {
            body: JSON.stringify(values),
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            }
        })).json();


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
 * @description Creates a new function that sets an error to selector.
 * If err is undefined, the text will be set to "".
 * @param {string} selector id of elements whose text will be set to err.
 */
export function setErrorMessage(selector) {
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
