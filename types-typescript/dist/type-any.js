"use strict";
// ----------Type: any----------
let idUser = 1;
idUser = "1"; // string
console.log("idUser", idUser);
// Tipo Inferido
let otherId;
otherId = 1;
otherId = "1";
console.log("otherId", otherId);
let surprise = "Hello typescript";
const res = surprise.substring(6);
console.log("res", res);
