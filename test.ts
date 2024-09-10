const en = {
    greeting: "Hello",
    welcome: "Welcome to our application!",
    clickMe: "Click me",
    clickCount: (count: number) =>
        `You've clicked ${count === 0 ? "no times" : count === 1 ? "once" : `${count} times`}`,
};

const translations = {
    en,
    es: {
        greeting: "Hola",
        welcome: "¡Bienvenido a nuestra aplicación!",
        clickMe: "Haz clic aquí",
        clickCount: (count: number) =>
            `Has hecho clic ${count === 0 ? "ninguna vez" : count === 1 ? "una vez" : `${count} veces`}`,
    },
} satisfies Record<string, typeof en>;
