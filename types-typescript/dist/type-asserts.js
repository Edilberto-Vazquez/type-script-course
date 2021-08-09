"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ----------Type: Aserciones----------
let username = "Edilberto";
// tenemos unad cadena, TS confia en mi!
let message = username.length > 5
    ? `Welcome ${username}`
    : "Username is too short";
console.log("message", message);
let usernammeWithId = "Edilberto 1";
// Como obtener el usrname?
username = usernammeWithId.substring(0, 10);
console.log("Username only", username);
// Sintaxis "as"
message =
    username.length > 5
        ? `Welcome ${username}`
        : "Username is too short";
let helloUser;
helloUser = "Hello Edilberto";
username = helloUser.substring(6);
console.log("username", username);
