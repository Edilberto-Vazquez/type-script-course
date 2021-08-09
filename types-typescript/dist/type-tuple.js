"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ---------Type: tuple----------
// Explicito
let user;
user = [1, "Edilberto"];
console.log("user", user);
console.log("username", user[1]);
console.log("username.lenght", user[1].length);
console.log("id", user[0]);
// Tuplas con varios valores
// id, username, isPro
let userInfo;
userInfo = [2, "Pedro", true];
console.log("userInfo", userInfo);
// Arreglo de Tuplas
let array = [];
array.push([1, "Edilberto"]);
array.push([2, "Pedro"]);
array.push([3, "María"]);
console.log("array", array);
// Uso de funciones Array
// María -> María001
array[2][1] = array[2][1].concat("001");
console.log("array", array);
