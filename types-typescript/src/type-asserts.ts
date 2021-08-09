export {};
// ----------Type: Aserciones----------

let username = "Edilberto";

// tenemos unad cadena, TS confia en mi!

let message: string =
  (<string>username).length > 5
    ? `Welcome ${username}`
    : "Username is too short";

console.log("message", message);

let usernammeWithId: any = "Edilberto 1";
// Como obtener el usrname?

username = (<string>usernammeWithId).substring(0, 10);
console.log("Username only", username);

// Sintaxis "as"

message =
  (username as string).length > 5
    ? `Welcome ${username}`
    : "Username is too short";

let helloUser: any;
helloUser = "Hello Edilberto";
username = (helloUser as string).substring(6);
console.log("username", username);
