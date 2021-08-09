"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------Type: void ----------
// Explicito
function showInfo(user) {
    console.log("user info", user.id, user.username, user.firstName);
    // return "hola"
}
showInfo({ id: 1, username: "Edi", firstName: "Edilberto" });
// Inferido
function showFormattedInfo(user) {
    console.log("user info", `id: ${user.id},
    username: ${user.username}, 
    firstName: ${user.firstName}`);
}
showFormattedInfo({ id: 1, username: "Edi", firstName: "Edilberto" });
// tipo void, como tipo de dato en variable
let unusable;
// unusable = null;
// unusable = undefined;
// ----------Type: Never----------
function handleError(code, message) {
    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handleError(404, "Not Found");
}
catch (error) { }
function sumNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
}
// ciclo infinito
sumNumbers(20);
