/**
 * @typedef {object} Validator
 * @property {boolean} valid - Indicates whether the data is acceptable.
 * @property {string} [message] - An optional error message. If the operation is successful, it should be undefined.
 */

/**
 * @param {string} pwd1
 * @param {string} pwd2
 * @returns {Validator}
 */
function checkSamePasswords(pwd1, pwd2) {
    if (pwd1 !== pwd2) {
        return {
            valid: false,
            message: "Las contraseñas no coinciden."
        }
    }

    return {
        valid: true,
    }
}

/**
 * @param {string} pwd
 * @returns {Validator}
 */
function checkPassword(pwd) {
    if (pwd.length < 8) {
        return {
            valid: false,
            message: "La contraseña debe tener por lo menos 8 caracteres."
        }
    }

    if (pwd.length > 20) {
        return {
            valid: false,
            message: "La contraseña debe tener como máximo 20 caracteres."
        }
    }

    const checks = [{
        regex: /[a-z]/,
        message: "La contraseña debe contener minúsculas.",
    }, {
        regex: /[A-Z]/,
        message: "La contraseña debe contener mayúsculas.",
    }, {
        regex: /\d/,
        message: "La contraseña debe contener dígitos.",
    }, {
        regex: /[^a-zA-Z0-9]/,
        message: "La contraseña debe contener caracteres especiales.",
    }];

    for (const check of checks) {
        if (!check.regex.test(pwd)) {
            return {
                valid: false,
                message: check.message,
            };
        }
    }

    return {
        valid: true,
    }
}

/**
 * @param {string} name
 * @returns {Validator}
 */
function checkName(name) {
    if (name.length < 8) {
        return {
            valid: false,
            message: "El nombre debe tener por lo menos 8 caracteres."
        }
    }

    if (name.length > 20) {
        return {
            valid: false,
            message: "El nombre debe tener como máximo 20 caracteres"
        }
    }

    return {
        valid: true
    }
}

/**
 * @param {string} surname
 * @returns {Validator}
 */
function checkSurname(surname) {
    return checkName(surname);
}

/**
 * @param {string} email
 * @returns {Validator}
 */
function checkEmail(email) {

}

/**
 * @param {string} id
 * @returns {Validator}
 */
function checkID(id) {

}
