const loadPeople = async () => {
    /**
     * @type {any[]}
     */
    const response = await (await fetch("http://localhost:3000/personas")).json();

    const personas = response.map(val => personFromSpanish(val));

    const card = document.getElementById("person-list-card-container");
    for (const persona of personas) {
        card.innerHTML += `
            <li class="person-list-card">
                <div class="person-list-card-decoration"></div>
                <article class="card-content">
                    <h3 title="${persona.name} ${persona.surname}" class="text-ellipsis">
                        ${persona.name} ${persona.surname}
                    </h3>
                    <ul class="description-list">
                        <li class="id text-ellipsis">${persona.id}</li>
                        <li title="${persona.email}" class="email text-ellipsis">
                            ${persona.email}
                        </li>
                        <li class="rut">${persona.rut}</li>
                    </ul>
                    <button id="showButton">
                        modificar
                    </button>
                </article>
            </li>
        `;
    }
}

class Person {
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
 * @return {Person}
 */
function personFromSpanish(obj) {
    return new Person(obj.nombre, obj.apellido, obj.cedula, obj.email, undefined, obj.rut);
}

loadPeople();
