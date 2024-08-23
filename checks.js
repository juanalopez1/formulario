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


document.getElementById('name').addEventListener('blur', function(){
    let input = document.getElementById('name').value;
    if (checkName((input)).valid === false) {
        let message = document.getElementById('messageName');
        message.innerHTML = message.innerHTML = checkName((input)).message;
        message.style.display = 'block';
    } else {
        let message = document.getElementById('messageName');
        message.style.display = 'none';  // Ocultar el mensaje si es válido
    }
})

document.getElementById('surname').addEventListener('blur', function(){
    let input = document.getElementById('surname').value;
    if (checkSurame((input)).valid === false) {
        let message = document.getElementById('messageSurname');
        message.innerHTML = message.innerHTML = checkSurname((input)).message;
        message.style.display = 'block';
    } else {
        let message = document.getElementById('messageSurame');
        message.style.display = 'none'; 
    }
})

document.getElementById('id').addEventListener('blur', function(){
    let input = document.getElementById('id').value;
    if (checkID((input)).valid === false) {
        let message = document.getElementById('messageId');
        message.innerHTML = message.innerHTML = checkID((input)).message;
        message.style.display = 'block';
    } else {
        let message = document.getElementById('messageId');
        message.style.display = 'none';  
    }
})

document.getElementById('email').addEventListener('blur', function(){
    let input = document.getElementById('email').value;
    if (checkEmail((input)).valid === false) {
        let message = document.getElementById('messageEmail');
        message.innerHTML = message.innerHTML = checkEmail((input)).message;
        message.style.display = 'block';
    } else {
        let message = document.getElementById('messageEmail');
        message.style.display = 'none';  
    }
})

document.getElementById('psw1').addEventListener('blur', function(){
    let input = document.getElementById('psw1').value;
    if (checkPassword((input)).valid === false) {
        let message = document.getElementById('messageP1');
        message.innerHTML = message.innerHTML = checkPassword((input)).message;
        message.style.display = 'block';
    } else {
        let message = document.getElementById('messageP1');
        message.style.display = 'none';  
    }
})

document.getElementById('psw2').addEventListener('blur', function(){
    let input = document.getElementById('psw1').value.toString();
    let input2 = document.getElementById('psw2').value.toString();

    console.log(typeof input, typeof input2);
    console.log(checkSamePasswords((input,input2)).valid)
    
    if (checkSamePasswords((input,input2).valid === false)) {
        let message = document.getElementById('messageP2');
        message.innerHTML = message.innerHTML = checkSamePasswords((input,input2)).message;
        message.style.display = 'block';
    } else {
        let message = document.getElementById('messageP2');
        message.style.display = 'none';  
    }
})