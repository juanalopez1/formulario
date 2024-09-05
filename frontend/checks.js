/** @typedef {{errorMessage: string}} ErrorMessage */

/** @typedef {object} ErrorMessageHook
 * @property {(err: ErrorMessage) => unknown} handler
 * @property {(data: string) => string | number} dataTransformer
 * @property {HTMLInputElement} input
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

                console.log("hook", hook.input.value, key);
                /** @type {HTMLInputElement} */
                hook.input

                if (hook.input && !hook.input.value) {
                    continue;
                }

                if (key === "password") {
                    values.password = hook.dataTransformer(hook.input.value);
                } else {
                    values.person[key] = hook.dataTransformer(hook.input.value);
                }
            }
        }

        console.log("send", values);
        const result = await (await fetch("http://localhost:3000/personas/check", {
            body: JSON.stringify(values),
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            }
        })).json();

        console.log("receive", result);


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

            hook.input.addEventListener("blur", listener)
        }
    }
}

/**
 * @description Creates a new function that sets an error to selector.
 * If err is undefined, the text will be set to "".
 * @param {HTMLElement} target id of elements whose text will be set to err.
 */
export function setErrorMessage(target) {
    /**
     * @param {ErrorMessage | undefined} err
     */
    return function(err) {
        target.innerText = err?.errorMessage ?? "";
    };
}
