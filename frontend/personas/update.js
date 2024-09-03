import { checkSamePasswords } from '../alta/checks.js'
import { Person } from '../personas.js'
import * as checks from '../alta/checks.js'
import { getPersonas } from './personas.js';

const updateDialog = document.getElementById('updateDialog');

/**
 * 
 * @param {Person} person 
 * @return {Person} person 
 */
function open2(person){
    passwordDialog.close();
    setDefaults(person);
    updateDialog.showModal();
    return person;
}

const toCheck = /** type {const} */[{
    inputId: 'voidName',
    checker: checkName,
    messageId: 'messageName',
}, {
    inputId: 'voidSurname',
    checker: checkSurname,
    messageId: 'messageSurname',
}, {
    inputId: 'voidId',
    checker: checkID,
    messageId: 'messageId',
}, {
    inputId: 'voidEmail',
    checker: checkEmail,
    messageId: 'messageEmail',
}, {
    inputId: 'voidpsw1',
    checker: checkPassword,
    messageId: 'messageP1',

}, { // We have to make the same check in both password inputs.
    inputId: 'voidpsw1',
    checker: () => checkSamePasswords(
        document.getElementById('psw1').value,
        document.getElementById('psw2').value
    ),
    messageId: 'messageP2',
}, {
    inputId: 'voidpsw2',
    checker: () => checkSamePasswords(
        document.getElementById('psw1').value,
        document.getElementById('psw2').value
    ),
    messageId: 'messageP2',
}, {
    inputId: 'voidRut',
    checker: checkRut,
    messageId: 'messageRut',
}]

/**
 * 
 * @param {Person} personUpdated 
 * @return {boolean}  
 */
export function isValid(personUpdated){
    console.log('entre a isvalid')
    checks.checkName(personUpdated.name)
    checks.checkSurname(personUpdated.surname)
    checks.checkEmail(personUpdated.email)
    checks.checkID(personUpdated.id)
    checks.checkRut(personUpdated.rut)
    checks.checkPassword(personUpdated.password)
    checks.checkSamePasswords(personUpdated.password)

    for (const check of toCheck) {
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
}

const personas = getPersonas();
let myPerson = personas.find((person) => person.id === "3.456.789-0");
console.log(myPerson, 'ACAAAAAAAAAAAAAAAAAAAAAAAAAAA');
console.log(isValid(myPerson));

if (isValid(myPerson)){
    console.log('entre a isvalid')
    const save = document.getElementById('sendButton');
    save.addEventListener('click', () => {
        const put = fetch(`http://localhost:3000/personas/${persona.id}`, {
            method: 'PUT',
            body: {
                "newValue": {
                    "person": {
                        "name": document.addEventListener('voidName').value,
                        "surname": document.getElementById('voidId').value,
                        "email": document.getElementById('voidEmail').value,
                        "id": document.getElementById('voidpsw1').value,
                        "rut": document.getElementById('voidRut').value
                    },
                    "password": document.getElementById('voidpsw1').value
                },
                "oldPassword": "Juana123!"
            },
            headers: {
                "Content-Type": 'application/json'
            },
        })
        console.log(put, 'acaaaaaaaaaaaaaa')

        if (put.ok) {
            dialog.close();
            window.location.href = "../personas/index.html";
        }
})}