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
    document.getElementById(`dialog3-${person.id}`).showModal();
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
    for (const person of personas) {
        card.innerHTML += `
            <li class="person-list-card">
                <div class="person-list-card-decoration"></div>
                <article class="card-content">
                    <div class="person-list-card-header">
                        <h3 title="${person.name} ${person.surname}" class="text-ellipsis">
                            ${person.name} ${person.surname}
                        </h3>
                        <div>
                            <button id="removeButton-${person.id}" class='mini-icon icon-hover'>
                                <!-- Remove icon (mini) -->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                  <path fill-rule="evenodd" d="M6.414 3c-.464 0-.909.184-1.237.513L1.22 7.47a.75.75 0 0 0 0 1.06l3.957 3.957A1.75 1.75 0 0 0 6.414 13h5.836A2.75 2.75 0 0 0 15 10.25v-4.5A2.75 2.75 0 0 0 12.25 3H6.414ZM8.28 5.72a.75.75 0 0 0-1.06 1.06L8.44 8 7.22 9.22a.75.75 0 1 0 1.06 1.06L9.5 9.06l1.22 1.22a.75.75 0 1 0 1.06-1.06L10.56 8l1.22-1.22a.75.75 0 0 0-1.06-1.06L9.5 6.94 8.28 5.72Z" clip-rule="evenodd" />
                                </svg>
                            </button><button id="openButton-${person.id}" class='mini-icon icon-hover'>
                                <!-- Edit icon (mini) -->
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                  <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                                  <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                                </svg>
                            </button>
                    </div>
                    </div>
                    <ul class="description-list">
                        <li id='id' class="id text-ellipsis">${person.id}</li>
                        <li title="${person.email}" class="email text-ellipsis">
                            ${person.email}
                        </li>
                        <li class="rut">${person.rut}</li>
                    </ul>
                </article>
                <dialog id="updateDialog-${person.id}">
                    <section class="container-modify">
                        <h2>Editar datos</h2>
                        <form>
                            <div class="inputs-container">
                                <label>Nombre</label>
                                <input id="voidName-${person.id}" type="text" />
                            </div>
                            <div class="inputs-container">
                                <label>Apellido</label>
                                <input id="voidSurname${person.id}" type="text" />
                            </div>
                            <div class="inputs-container">
                                <label>Cédula</label>
                                <input id="voidId${person.id}" type="text" />
                            </div>
                            <div class="inputs-container">
                                <label>Nuevo email</label>
                                <input id="voidEmail-${person.id}" type="email" />
                            </div>
                            <div class="inputs-container">
                                <label>Nueva contraseña</label>
                                <input id="voidpsw1-${person.id}" type="password" />
                            </div>
                            <div class="inputs-container">
                                <label>Repetir contraseña</label>
                                <input id="voidpsw2-${person.id}" type="password" />
                            </div>
                            <div class="inputs-container">
                                <label>RUT</label>
                                <input id="voidRut-${person.id}" type="text" />
                            </div>
                        </form>
                        <div class="buttons">
                            <button id="sendButton-${person.id}" class="for-buttons">
                                <span style="color: #4a044e">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                            <button id="closeButton-${person.id}" class="for-buttons" onclick="updateDialog.close()">
                                <span style="color: #4a044e">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd"
                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </section>
                </dialog>

                <dialog id="dialog3-${person.id}">
                    <section class="container-modify">
                        <h2>Ingrese contraseña correspondiente <span style="color: red; font-weight: 700;">para eliminar</span></h2>
                        <div class="div-psw">
                            <input class="input-psw" id="password-${person.id}" type="password" id="error-msg-${person.id}" />
                        </div>
                        <div class="psw-buttons">
                            <button id="closeButton-${person.id}" class="button-psw" onclick="dialog3.close()">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                    <path fill-rule="evenodd"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                            <button id="confirm-delete-${person.id}" class="confirm-button">
                                <span> Confirmar </span>
                            </button>
                        </div>
                    </section>
                </dialog>
            </li>
        `;

        document
            .getElementById(`openButton-${person.id}`)
            .addEventListener('click', function() {
                showModify(person);
            });

        document
            .getElementById(`removeButton-${person.id}`)
            .addEventListener('click', function() {
                showDelete(person);
            });

        document.getElementById(`confirm-delete-${person.id}`).addEventListener('click', async function() {
            const psw = {
                'password': document.getElementById(`input-password-${person.id}`).value
            };

            const response = await fetch(`http://localhost:3000/personas/${person.id}`, {
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
                let input = document.getElementById(`input-password-${person.id}`);
                input.classList.add('error');
            }

            return;
        });

        document.getElementById(`confirm-delete-${person.id}`).addEventListener('click', async function() {
            const psw = {
                'password': document.getElementById(`password-${person.id}`).value
            };

            const response = await fetch(`http://localhost:3000/personas/${person.id}/check`, {
                method: 'POST',
                body: JSON.stringify(psw),
                headers: {
                    "Content-Type": 'application/json'
                },
            });

            if (response.status === 200) {
                passwordDialog.close();
                updateDialog.showModal();
                document.getElementById(`voidName-${person.id}`).value = person.name;
                document.getElementById(`voidSurname-${person.id}`).value = person.surname;
                document.getElementById(`voidId-${person.id}`).value = person.id;
                document.getElementById(`voidEmail-${person.id}`).value = person.email;
                document.getElementById(`voidpsw1-${person.id}`).value = person.name;
                document.getElementById(`voidpsw2-${person.id}`).value = person.name;
                document.getElementById(`voidRut-${person.id}`).value = person.rut;

            } else {
                let input = document.getElementById(`password-${person.id}`);
                input.classList.add('error');
            }

            const save = document.getElementById(`sendButton-${person.id}`);
            save.addEventListener('click', async () => {
                const put = await fetch(`http://localhost:3000/personas/${person.id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                        "newValue": {
                            "person": {
                                "name": document.getElementById(`voidName-${person.id}`).value,
                                "surname": document.getElementById(`voidSurname-${person.id}`).value,
                                "id": document.getElementById(`voidId-${person.id}`).value,
                                "email": document.getElementById(`voidEmail-${person.id}`).value,
                                "rut": document.getElementById(`voidRut-${person.id}`).value
                            },
                            "password": document.getElementById(`voidpsw1-${person.id}`).value
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
