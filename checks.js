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
            message: "Mínimo de 8 caracteres.",
        }
    }

    if (pwd.length > 20) {
        return {
            valid: false,
            message: "Máximo de 8 caracteres.",
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
    if (name.length < 3) {
        return {
            valid: false,
            message: "Mínimo de 8 caracteres."
        }
    }

    if (name.length > 20) {
        return {
            valid: false,
            message: "Máximo de 20 caracteres."
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
    const check = {
        regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "El correo ingresado no es válido.",
    };

    if (!check.regex.test(email)) {
        return {
            valid: false,
            message: check.message
        };
    }
    return {
        valid: true,
    }

}

/**
 * @param {string} id
 * @returns {Validator}
 */
function checkID(id) {
    const format = [{
        regex: /^\d\.\d{3}\.\d{3}-\d$/,
        message: 'Debe ingresar la cédula con puntos y guiones.'
    }]

    if(!format[0].regex.test(id)){
        return {
            valid: false,
            message: format[0].message,
        }
    }
    if (checkDigit(id) === false){
        return {
            valid: false,
            message: 'Los dígitos de la cédula no verifican.'
        }
    }
    return {
        valid: true,
    }
}

/**
 * @param {string} id
 * @returns {boolean}
 */
function checkDigit(id) {
    id = id.replace(/\D/g, '');
    
    const digit = Number(id.charAt(id.length - 1));
    let numero = id.slice(0, -1);
    numero = numero.toString()
    numeroArr = numero.split('').map((ch) => Number(ch));

    const pesos = [2, 9, 8, 7, 6, 3, 4];
    
    let sum = 0;
    
    for (let i = 0; i < 7; i++) {
        sum += numeroArr[i] * pesos[i];}
    
    const result = (10 - (sum % 10)) % 10;
    return digit === result;

}
