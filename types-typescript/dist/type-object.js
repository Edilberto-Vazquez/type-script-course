"use strict";
// ----------Type: object----------
// Explicito
let user;
user = {}; // Object
user = {
    id: 1,
    username: "paparazzi",
    firstName: "Pablo",
    isPro: true,
};
console.log("user", user);
// Object vs object(Clase JS vs TS)
const myObj = {
    id: 1,
    username: "paparazzi",
    firstName: "Pablo",
    isPro: true,
};
const isInstance = myObj instanceof Object; // clase Object JavaScript
console.log("isInstance", isInstance);
console.log("user.name", myObj.username);