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
export function checkSamePasswords(pwd1, pwd2) {
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

    /**
     * @type {[string, RegExp][]}
     */
    const checks = [
        [
            /[a-z]/,
            "La contraseña debe contener minúsculas.",
        ],
        [
            /[A-Z]/,
            "La contraseña debe contener mayúsculas.",
        ],
        [
            /\d/,
            "La contraseña debe contener dígitos.",
        ],
        [
            /[^a-zA-Z0-9]/,
            "La contraseña debe contener caracteres especiales.",
        ]
    ];

    for (const [regex, message] of checks) {
        if (!regex.test(pwd)) {
            return {
                valid: false,
                message,
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
            message: "Mínimo de 3 caracteres."
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

    if (!format[0].regex.test(id)) {
        return {
            valid: false,
            message: format[0].message,
        }
    }

    if (checkDigit(id) === false) {
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

    const digit = Number(id[id.length - 1]);
    const numero = id.slice(0, -1);
    const numeroArr = numero.split('').map((ch) => Number(ch));

    const coeficientes = [2, 9, 8, 7, 6, 3, 4];

    let sum = 0;

    for (let i = 0; i < 7; i++) {
        sum += numeroArr[i] * coeficientes[i];
    }

    const result = (10 - (sum % 10)) % 10;
    return digit === result;
}

/**
 * @param {string} rut
 * @returns {Validator}
 */
function checkRut(rut) {
    rut = rut.toString().trim()
    if (rut.length < 12) {
        return {
            valid: false,
            message: 'El número de RUT debe tener como mínimo 12 caracteres.'
        }
    }

    if (checkDigitRUT(rut) === false) {
        return {
            valid: false,
            message: 'El número no verifica.'
        }
    }

    return {
        valid: true,
    }


}

/**
 * @param {string} rut
 * @returns {boolean}
 */
function checkDigitRUT(rut) {
    rut = rut.toString().split('')
    const digit = Number(rut[rut.length - 1]);
    const numero = rut.slice(0, 11);

    const coeficientes = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;

    for (let i = 0; i < numero.length; i++) {
        sum += numero[i] * coeficientes[i];
    }

    const result = (11 - (sum % 11)) % 11;

    if (result < 10 && result === digit) {
        return true
    };

    if (result === 11 && digit === 0) {
        return true
    };

    return false

}

const checks = /** type {const} */[{
    inputId: 'name',
    checker: checkName,
    messageId: 'messageName',
}, {
    inputId: 'surname',
    checker: checkSurname,
    messageId: 'messageSurname',
}, {
    inputId: 'id',
    checker: checkID,
    messageId: 'messageId',
}, {
    inputId: 'email',
    checker: checkEmail,
    messageId: 'messageEmail',
}, {
    inputId: 'psw1',
    checker: checkPassword,
    messageId: 'messageP1',

}, { // We have to make the same check in both password inputs.
    inputId: 'psw1',
    checker: () => checkSamePasswords(
        document.getElementById('psw1').value,
        document.getElementById('psw2').value
    ),
    messageId: 'messageP2',
}, {
    inputId: 'psw2',
    checker: () => checkSamePasswords(
        document.getElementById('psw1').value,
        document.getElementById('psw2').value
    ),
    messageId: 'messageP2',
}, {
    inputId: 'rut',
    checker: checkRut,
    messageId: 'messageRut',
}]

for (const check of checks) {
    const input = document.getElementById(check.inputId);
    input.addEventListener('blur', function() {
        let result = check.checker(input.value);
        const message = document.getElementById(check.messageId);
        if (!result.valid) {
            message.innerText = result.message;
            message.style.display = 'block'
        } else {
            message.innerText = '';
            message.style.display = 'none';
        }
    });
}

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
