import { jwtGuard, localStorageKeys, logOut } from "../utils.js";
import * as checks from "../checks.js";

async function main() {
    const selfId = await jwtGuard();
    const authorization = /** @type {const} */ ({
        Authorization: `Bearer ${localStorage.getItem(localStorageKeys.jwtToken)}`,
    });

    const result = await fetch("https://localhost/backend/personas", {
        headers: {
            ...authorization,
        },
    });

    if (!result.ok) {
        confirm("Error inesperado. Te redirigiremos al login.");
        // logOut();
    }

    /**
     * @type {(Person & { photo: string })[]}
     */
    const personas = await result.json();

    const card = document.getElementById("person-list-card-container");
    for (const i in personas) {
        const person = personas[i];
        const li = document.createElement("li");
        li.className = "person-list-card";
        li.innerHTML = `
            <div class="person-list-card-decoration">
                <img class="avatar" src="${person.photo}" alt="avatar de ${person.name}">
            </div>
            <article class="card-content">
                <div class="person-list-card-header">
                    <h3 title="${person.name} ${person.surname}" class="text-ellipsis">
                        ${person.name} ${person.surname}
                    </h3>
                </div>
                <ul class="description-list">
                    <li id='id' class="id text-ellipsis">${person.id}</li>
                    <li title="${person.email}" class="email text-ellipsis">
                        ${person.email}
                    </li>
                    <li class="rut">${person.rut}</li>
                </ul>
            </article>
        `;

        card.appendChild(li);
    }

    // Setup logout
    /** @type {HTMLButtonElement} */
    const logoutButton = document.getElementById("logout-button");
    logoutButton.addEventListener("click", () => logOut());

    // Setup modify dialog
    const user = personas.find((p) => (p.id = selfId));

    if (!user) {
        logOut();
    }

    /** @type {HTMLButtonElement} */
    const sendButton = document.getElementById("send-button");

    /** @type {checks.PersonHooks} **/
    const hooks = {
        name: {
            input: document.getElementById("voidName"),
            handler: checks.setErrorMessage(
                document.getElementById("voidMessage-name"),
            ),
            dataTransformer: (v) => v,
        },
        rut: {
            input: document.getElementById("voidRut"),
            handler: checks.setErrorMessage(
                document.getElementById("voidMessage-rut"),
            ),
            dataTransformer: (v) => parseInt(v),
        },
        email: {
            input: document.getElementById("voidEmail"),
            handler: checks.setErrorMessage(
                document.getElementById("voidMessage-email"),
            ),
            dataTransformer: (v) => v,
        },
        surname: {
            input: document.getElementById("voidSurname"),
            handler: checks.setErrorMessage(
                document.getElementById("voidMessage-surname"),
            ),
            dataTransformer: (v) => v,
        },
        password: {
            input: document.getElementById("voidPsw1"),
            handler: checks.setErrorMessage(
                document.getElementById("voidMessage-pwd1"),
            ),
            dataTransformer: (v) => v,
        },
        repeatPassword: {
            input: document.getElementById("voidPsw2"),
            handler: checks.setErrorMessage(
                document.getElementById("voidMessage-pwd2"),
            ),
            dataTransformer: (v) => v,
        },
    };

    hooks.rut.input.value = user.id;
    hooks.email.input.value = user.email;
    hooks.name.input.value = user.name;
    hooks.surname.input.value = user.surname;
    hooks.rut.input.value = user.rut;

    const hookInputs = Object.values(hooks).map((h) => h.input);

    checks.hookPersonChecks(hooks, (result) => {
        sendButton.disabled =
            !checks.isEmpty(result) || hookInputs.some((i) => i.value === "");
    });

    /** @type {HTMLButtonElement} */
    const modifyButton = document.getElementById("modify-button");
    modifyButton.disabled = false;

    /** @type {HTMLDialogElement} */
    const modifyDialog = document.getElementById("modify-dialog");

    modifyButton.addEventListener("click", () => modifyDialog.show());

    /** @type {HTMLButtonElement} */
    const closeButton = document.getElementById("close-button");

    closeButton.addEventListener("click", () => modifyDialog.close());

    sendButton.addEventListener("click", async () => {
        const put = await fetch(`https://localhost/backend/personas/${user.id}`, {
            method: "PUT",
            body: JSON.stringify({
                person: {
                    name: document.getElementById("voidName").value,
                    surname: document.getElementById("voidSurname").value,
                    email: document.getElementById("voidEmail").value,
                    id: user.id,
                    rut: document.getElementById("voidRut").value,
                },
                password: document.getElementById("voidPsw1").value,
            }),
            headers: {
                "Content-Type": "application/json",
                ...authorization,
            },
        });

        if (put.ok) {
            window.location.reload();
        }
    });

    // Delete
    /** @type {HTMLButtonElement} */
    const deleteButton = document.getElementById("delete-button");

    deleteButton.disabled = false;

    deleteButton.addEventListener("click", async () => {
        const password = confirm("Seguro que desea eliminar su cuenta?");

        if (!password) {
            return;
        }

        const del = await fetch(`https://localhost/backend/personas/${user.id}`, {
            method: "DELETE",
            headers: {
                ...authorization,
            },
        });

        if (del.ok) {
            logOut();
        }
    });
}

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

main();
