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
const button = document.getElementById('loginButton');

checks.hookPersonChecks(hooks, (result) => {
    if(checks.isEmpty(result) && (hooks.email.input.value !== '' && hooks.password.input.value !== '' )){
        button.disabled = false;
    }
    else{
        button.disabled = true;
    }
});


