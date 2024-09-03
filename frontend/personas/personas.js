export class Person {
    /**
     * @param {string} email
     * @param {string} name
     * @param {string} surname
     * @param {string} id
     * @param {string} [password]
     * @param {string} rut
     */
    constructor(name, surname, id, email, password, rut) {
        this.name = name;
        this.surname = surname;
        this.id = id;
        this.email = email;
        this.password = password;
        this.rut = rut;
    }
}

/**
 * @param {Person} person 
 */
export function showModify(person){
    console.log(person, 'en modify');
    dialog1.showModal();
    return;
}

/**
 * @param {string} password
 */
function checkPassword(password){
    console.log('entree')
    console.log(document.getElementById('password').value);
    console.log(password)
    if (password === (document.getElementById('password').value)){
        open2(person);
    }
    else{
        console.log("AAAAAAAAAAAAA");
    }
}


/**
 * @type {Person[]}
 */
export let personas = [];

const loadPeople = async () => {
    /**
     * @type {Person[]}
     */
    personas = await (await fetch("http://localhost:3000/personas")).json();

    const card = document.getElementById("person-list-card-container");
    for (const i in personas) {
        const persona = personas[i];
        card.innerHTML += `
            <li class="person-list-card">
                <div class="person-list-card-decoration"></div>
                <article class="card-content">
                    <h3 title="${persona.name} ${persona.surname}" class="text-ellipsis">
                        ${persona.name} ${persona.surname}
                    </h3>
                    <ul class="description-list">
                        <li id='id' class="id text-ellipsis">${persona.id}</li>
                        <li title="${persona.email}" class="email text-ellipsis">
                            ${persona.email}
                        </li>
                        <li class="rut">${persona.rut}</li>
                    </ul>
                    <button id="openButton-${persona.id}" class='pencil' >
                        <img src="../assets/pencil.svg" alt='Editar'>
                    </button>
                </article>
            </li>
        `;

        const openButton = document.getElementById(`openButton-${persona.id}`);
        openButton.addEventListener('click', function() {
            showModify(persona); 
        });

        document.getElementById('confirm').addEventListener('click', async function() {
            const psw = {
                'password': document.getElementById('password').value
            };

            const response = await fetch(`http://localhost:3000/personas/${persona.id}/check`, {
                method: 'POST',
                body: JSON.stringify(psw),
                headers: {
                    "Content-Type": 'application/json'
                },
            });

            console.log(response)
            if (response.status === 200){
                dialog1.close();
                dialog2.showModal();
                document.getElementById('voidName').value = persona.name;
                document.getElementById('voidId').value = persona.id;
                document.getElementById('voidEmail').value = persona.email;
                document.getElementById('voidpsw1').value = persona.name;
                document.getElementById('voidpsw2').value = persona.name;
                document.getElementById('voidRut').value = persona.rut;
                
            }

            return;
        });

        
        const save = document.getElementById('submitButton');
        save.addEventListener('click', () => {
            const put =  fetch (`http://localhost:3000/personas/${persona.id}`, {
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
                            "password": "Juana123!"
                        },
                        "oldPassword": "Juana123!"
                    },
                headers: {
                    "Content-Type": 'application/json'
                },
            })
            console.log(put,'acaaaaaaaaaaaaaa')
            
            if (put.ok) {
                dialog.close();
                window.location.href = "../personas/index.html";
            }
        })
    }
}

loadPeople();


