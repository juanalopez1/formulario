import { checkSamePasswords } from '../alta/checks.js'
import { Person } from '../personas.js'

const dialog2 = document.getElementById('dialog2');


/**
 * 
 * @param {Person} person 
 */
function open2(person){
    dialog1.close();
    setDefaults(person);
    dialog2.showModal();
}

/**
 * 
 * @param {Person} person 
 */
/*function saveUpdate(person){
    const save = document.getElementById('submitButton');
    const myId = document.getElementById('id').value;
    save.addEventListener('click', async () => {
        const response = await fetch(`http://localhost:3000/personas/${myId}`, {
            method: 'PUT',
            body: JSON.stringify({
                newValue: persona, 
                oldPassword: persona.oldPassword 
            }),
            headers: {
                "Content-Type": 'application/json'
            },
        });

        if (response.ok) {
            dialog.close();
            window.location.href = "../personas/index.html";
        }
})}

saveUpdate();*/

/* if (!checkPassword()){
    message.style.display = 'block';
}else{
    message.style.display = 'none';
} */
