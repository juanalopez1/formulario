/**
 * Matches the locally stored jwt token against the backend, and returns the
 * user's id from the backend's response. If the user's unauthorized, they're
 * redirected to the login page (via `redirectToLogin`).
 * @returns {Promise<string> | never} The id of the user returned from the backend
 * */
export async function jwtGuard() {
    const token = localStorage.getItem(localStorageKeys.jwtToken);

    if (!token) {
        logOut();
    }

    const headers = {
        Authorization: `Bearer ${token}`,
    };

    try {
        const result = await fetch("https://localhost/backend/personas/verify", {
            headers,
        });

        if (result.status === 401) {
            alert("hi");
            logOut(window.location.href);
        }

        const parsed = await result.json();
        return parsed.id;
    } catch (e) {
        console.error(e);
        confirm("Error al autenticarte. te redirigiremos al login.");
    }
}

/** @type {(loginAimPage: string) => never} */
export function logOut(loginAimPage) {
    localStorage.clear();
    sessionStorage.clear();
    if (loginAimPage !== undefined) {
        sessionStorage.setItem(sessionStorageKeys.aimPage, loginAimPage);
    }
    window.location.href = "/login";
}

export const localStorageKeys = /** @type {const} */ ({
    jwtToken: "jwtToken",
});

export const sessionStorageKeys = /** @type {const} */ ({
    aimPage: "aimPage",
});
