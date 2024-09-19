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
    const result = await fetch("https://localhost/backend/personas/verify", {
        headers,
    });

    if (result.status === 401) {
        logOut(window.location.href);
    }

    const parsed = await result.json();
    return parsed.id;
}

/** 
 * @param {string} [loginAimPage]
 * @returns {never} */
export function logOut(loginAimPage) {
    localStorage.clear();
    sessionStorage.clear();
    console.log(loginAimPage);
    if (loginAimPage !== undefined) {
        sessionStorage.setItem(sessionStorageKeys.aimPage, loginAimPage);
    }
    window.location.href = "/login";
}

/** @enum {string} */
export const localStorageKeys = /** @type {const} */ ({
    jwtToken: "jwtToken",
});

/** @enum {string} */
export const sessionStorageKeys = /** @type {const} */ ({
    aimPage: "aimPage",
});
