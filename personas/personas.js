const fn = async () => {
    /**
     * @type {any[]}
     */
    const response = await (await fetch("http://localhost:3000/personas")).json();

    const personas = response.map(val => personFromSpanish(val));

    const card = document.getElementById("person-list-card-container");
    for (const persona of personas) {
        card.innerHTML += `
            <div class="person-list-card">
                <div class="person-list-card-decoration"></div>
                <article class="card-content">
                    
                    <abbr title="${persona.name} ${persona.surname}">
                        <h3 class="text-ellipsis">${persona.name} ${persona.surname}</h3>
                    </abbr>
                    <ul class="description-list">
                        <li class="id text-ellipsis">${persona.id}</li>
                    <abbr title="${persona.email}">
                        <li class="email">${persona.email}</li>
                    </abbr>
                        <li class="rut">${persona.rut}</li>
                    </ul>
                </article>
            </div>
        `;
    }
}

class Persona {
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
 * @return {Persona}
 */
function personFromSpanish(obj) {
    return new Persona(obj.nombre, obj.apellido, obj.cedula, obj.email, undefined, obj.rut);
}

fn();
