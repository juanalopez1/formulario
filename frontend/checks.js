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
 * @property {ErrorMessageHook} [photo]
 * @property {ErrorMessageHook} [repeatPassword]
 * @property {ErrorMessageHook} [rut]
 */

/**
 * @param {Record<string, unknown>} obj
 * */
export function isEmpty(obj) {
    return !obj || Object.keys(obj).length === 0;
}

/**
 * @param {PersonHooks} hooks
 * @param {(result: Record<string, unknown>) => unknown} [callback]
 *      - Called after hooks, gives the object returned from the backend.
 *      If any empty value is passed in a hook, the backend will treat the
 *      value as 'having no error'. Beware.
 */
export async function hookPersonChecks(hooks, callback) {
    const listener = async () => {
        const values = {
            person: {},
        };

        // Transform data
        for (const key in hooks) {
            if (hooks.hasOwnProperty(key)) {
                /** @type {ErrorMessageHook} */
                const hook = hooks[key];

                if (hook.input && !hook.input.value) {
                    continue;
                }

                values[key] = hook.dataTransformer(hook.input.value);
            }
        }

        let photoResult;

        if (hooks.photo !== undefined) {
            const files = hooks.photo.input.files;
            if (files.length === 1 && files[0].size > 1024 * 10) {
                photoResult = {
                    errorMessage: "Máximo de 10kb",
                }
            }
        }

        // Query backend
        const result = {
            ...(await (
                await fetch("https://localhost/backend/auth/check", {
                    body: JSON.stringify({ ...values, photo: undefined }),
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
            ).json()),
        };

        if (photoResult !== undefined) {
            result.photo = photoResult;
        }

        for (const key in hooks) {

            if (hooks.hasOwnProperty(key)) {
                /** @type {ErrorMessageHook} */
                const hook = hooks[key];

                hook.handler(result[key] ?? "");
            }
        }

        if (typeof callback === "function") {
            callback(result);
        }
    };

    // Add listener to each hook
    for (const hook of Object.values(hooks)) {
        hook.input.addEventListener("input", listener);
    }

    // Call this once in case the form already has the correct data
    // (from browser autocomplete, for example).
    await listener();
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
