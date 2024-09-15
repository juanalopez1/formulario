import * as checks from '../checks.js';

const inputs = /** @type {const} */ {
    email: /** @type {HTMLInputElement} */ (document.querySelector('#email')),
    password: /** @type {HTMLInputElement} */ (document.querySelector('#psw1')),
}

/** @type {checks.PersonHooks} */
const hooks = {
    "email": {
        "input": inputs.email,
        "handler": checks.setErrorMessage(document.querySelector('#messageEmail')),
        "dataTransformer": (v) => v,
    },
    "password": {
        "input": inputs.password,
        "dataTransformer": (v) => v,
        "handler": checks.setErrorMessage(document.querySelector("#messageP1")),
    }
};

/** @type {HTMLButtonElement} */
const loginButton = document.querySelector('#loginButton');

/** @param {Record<string, unknown>} backendResult  */
function setLoginButton(backendResult) {
    loginButton.disabled = !checks.isEmpty(backendResult)
        || !inputs.password.value
        || !inputs.email.value;
}

checks.hookPersonChecks(hooks, (result) => {
    loginButton
});
