"use strict";
// ----------Type: Number----------
// Explicito
let phone;
phone = 1;
phone = 542654;
// phone = "hola" // Error
// Inferido
let phoneNumber = 545464;
phoneNumber = 2315;
// phoneNumber = true // Error
let hex = 0x0321fe;
let binary = 0b01001;
let octal = 0o031457;
// ----------Type: Boolean----------
// Explicito
let isPro;
isPro = true;
// isPro = 1; // Error
// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 12345 // Error
// ----------Type: Strings----------
// Explicito
let username = "Edilberto";
username = "Vazquez";
// usename = true // Error
// Template String
// Uso de back-tick `
let userInfo;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + "Luna"}
    phone: ${phone}
    isPro: ${isUserPro}
`;
console.log("userInfo", userInfo);
