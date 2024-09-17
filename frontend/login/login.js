import * as checks from '../checks.js';

/** @type {checks.PersonHooks} */
const hooks = {
    'email': {
        'input': document.getElementById('email'),
        'handler': checks.setErrorMessage(document.getElementById('messageEmail')),
        'dataTransformer': (value) => value
    },
    'password': {
        'input': document.getElementById('psw1'),
        'handler': checks.setErrorMessage(document.getElementById('messageP1')),
        'dataTransformer': (value) => value
    }
};

/** @type {HTMLButtonElement} */
const loginButton = document.getElementById('loginButton');

checks.hookPersonChecks(hooks, (result) => {
    if (checks.isEmpty(result) && (hooks.email.input.value !== '' && hooks.password.input.value !== '')) {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
});

loginButton.addEventListener('click', async (_) => {
    const result = await fetch('https://localhost/backend/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: hooks.email.input.value,
            password: hooks.password.input.value
        })
    });

    const token = await result.json();

    if (result.ok) {
        localStorage.setItem('token', JSON.stringify(token.jwtToken));
        const aimPage = sessionStorage.getItem("aimPage");
        sessionStorage.removeItem("aimPage");
        window.location.href = aimPage ?? "../personas";
    } else {
        // TODO
        alert('deberiamos mostrar un errorr aca');
    }
});
