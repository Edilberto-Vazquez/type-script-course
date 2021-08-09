"use strict";
// ----------Type: null----------
// Explicita
let nullVariable;
nullVariable = null;
// nullVariable = 1 // Error
// Implicito
let otherVariable = null;
otherVariable = "test";
console.log("nullVariable", nullVariable);
console.log("otherVariable", otherVariable);
// ----------Type: Undefined----------
// Explicita
let undefinedVariable = undefined;
// undefinedVariable = "test"; // Error
// Implicito
let otherUndefined = undefined;
otherUndefined = 1;
console.log("undefinedVariable", undefinedVariable);
console.log("otherUndefined", otherUndefined);
// ---------- Null y Undefined: como subtipos
// --strictNullChecks
let albumName;
// albumName = null;
// albumName = undefined;
