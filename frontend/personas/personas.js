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
export function showModify(person) {
    console.log(person, 'en modify');
    passwordDialog.showModal();
    return;
}

/**
 * @param {Person} person 
 */
export function showDelete(person) {
    document.getElementById("dialog3").showModal();
    return;
}

/**
 * @param {string} password
 */
function checkPassword(password) {
    console.log('entree')
    console.log(document.getElementById('password').value);
    console.log(password)
    if (password === (document.getElementById('password').value)) {
        open2(person);
    } else {
        console.log("AAAAAAAAAAAAA");
    }
}


/**
 * @type {Person[]}
 */
let personas = [];

export function getPersonas() {
    return personas;
}

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
                    <div class="person-list-card-header">
                        <h3 title="${persona.name} ${persona.surname}" class="text-ellipsis">
                            ${persona.name} ${persona.surname}
                        </h3>
                        <div>
                            <button id="removeButton-${persona.id}" class='mini-icon icon-hover'>
                                <!-- Remove icon (mini) -->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                  <path fill-rule="evenodd" d="M6.414 3c-.464 0-.909.184-1.237.513L1.22 7.47a.75.75 0 0 0 0 1.06l3.957 3.957A1.75 1.75 0 0 0 6.414 13h5.836A2.75 2.75 0 0 0 15 10.25v-4.5A2.75 2.75 0 0 0 12.25 3H6.414ZM8.28 5.72a.75.75 0 0 0-1.06 1.06L8.44 8 7.22 9.22a.75.75 0 1 0 1.06 1.06L9.5 9.06l1.22 1.22a.75.75 0 1 0 1.06-1.06L10.56 8l1.22-1.22a.75.75 0 0 0-1.06-1.06L9.5 6.94 8.28 5.72Z" clip-rule="evenodd" />
                                </svg>
                            </button><button id="openButton-${persona.id}" class='mini-icon icon-hover'>
                                <!-- Edit icon (mini) -->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                  <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                                  <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                                </svg>
                            </button>
                    </div>
                    </div>
                    <ul class="description-list">
                        <li id='id' class="id text-ellipsis">${persona.id}</li>
                        <li title="${persona.email}" class="email text-ellipsis">
                            ${persona.email}
                        </li>
                        <li class="rut">${persona.rut}</li>
                    </ul>
                </article>
            </li>
        `;

        const openButton = document.getElementById(`openButton-${persona.id}`);
        openButton.addEventListener('click', function() {
            showModify(persona);
        });

        const removeButton = document.getElementById(`removeButton-${persona.id}`);
        removeButton.addEventListener('click', function() {
            showDelete(persona);
        });

        document.getElementById('confirm-delete').addEventListener('click', async function() {
            const psw = {
                'password': document.getElementById('input-password').value
            };

            const response = await fetch(`http://localhost:3000/personas/${persona.id}`, {
                method: 'DELETE',
                body: JSON.stringify(psw),
                headers: {
                    "Content-Type": 'application/json'
                },
            });

            console.log(response)
            if (response.status === 200) {
                window.location.reload();
            } else {
                let input = document.getElementById("input-password");
                input.classList.add('error');
            }


            return;
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

            if (response.status === 200) {
                console.log('entre', persona.surname)
                passwordDialog.close();
                updateDialog.showModal();
                document.getElementById('voidName').value = persona.name;
                document.getElementById('voidSurname').value = persona.surname;
                document.getElementById('voidId').value = persona.id;
                document.getElementById('voidEmail').value = persona.email;
                document.getElementById('voidpsw1').value = persona.name;
                document.getElementById('voidpsw2').value = persona.name;
                document.getElementById('voidRut').value = persona.rut;

            } else {
                let input = document.getElementById('password');
                input.classList.add('error');
            }

            const save = document.getElementById('sendButton');
            save.addEventListener('click', async () => {
                const put = await fetch(`http://localhost:3000/personas/${persona.id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        "newValue": {
                            "person": {
                                "name": document.getElementById('voidName').value,
                                "surname": document.getElementById('voidSurname').value,
                                "id": document.getElementById('voidId').value,
                                "email": document.getElementById('voidEmail').value,
                                "rut": document.getElementById('voidRut').value
                            },
                            "password": document.getElementById('voidpsw1').value
                        },
                        "oldPassword": "Juana123!"
                    }),
                    headers: {
                        "Content-Type": 'application/json'
                    },
                });

                window.location.reload();
            })
            return;
        });
    }
}

loadPeople();
