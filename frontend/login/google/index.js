import { localStorageKeys } from "../../utils.js";

const queryString = window.location.search;

// Create a URLSearchParams object
const urlParams = new URLSearchParams(queryString);

// Now you can use various methods to access the parameters
const token = urlParams.get('token'); // "John"

localStorage.setItem(localStorageKeys.jwtToken, token);
console.log(token);

window.location.href = "../../personas";

