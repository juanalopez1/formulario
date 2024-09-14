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
 * @property {ErrorMessageHook} [repeatPassword]
 * @property {ErrorMessageHook} [rut]
 */

/** @param {object} obj  */
function isEmpty(obj) {
    return !obj && Object.keys(obj).length === 0;
}

/**
 * @param {PersonHooks} hooks
 * @param {(correct: boolean) => unknown} [callback] -- Called after hooks, `correct` says whether there are no format errors.
 */
export async function hookPersonChecks(hooks, callback) {
    // For every element passed, in their blur notify everyone whether their
    // values are still correct.
    /** @type {(element: HTMLInputElement) => void} */
    const listener = async (_element) => {
        const values = {
            person: {}
        };

        for (const key in hooks) {
            if (hooks.hasOwnProperty(key)) {
                /** @type {ErrorMessageHook} */
                const hook = hooks[key];

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

        const result = await (await fetch("http://localhost/backend/personas/check", {
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

                const errToHandle = ["password", "repeatPassword"].includes(key) ?
                    result[key] :
                    result.person?.[key];

                hook.handler(errToHandle ?? "");
            }
        }

        callback(isEmpty(result));
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
export function setErrorMessage(target, callback) {
    /**
     * @param {ErrorMessage | undefined} err
     */
    return function(err) {
        target.innerText = err?.errorMessage ?? "";
    };
}
