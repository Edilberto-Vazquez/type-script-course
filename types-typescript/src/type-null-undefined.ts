// ----------Type: null----------

// Explicita

let nullVariable: null;
nullVariable = null;
// nullVariable = 1 // Error

// Implicito

let otherVariable = null;
otherVariable = "test";

console.log("nullVariable", nullVariable);
console.log("otherVariable", otherVariable);

// ----------Type: Undefined----------

// Explicita

let undefinedVariable: undefined = undefined;
// undefinedVariable = "test"; // Error

// Implicito

let otherUndefined = undefined;
otherUndefined = 1;

console.log("undefinedVariable", undefinedVariable);
console.log("otherUndefined", otherUndefined);

// ---------- Null y Undefined: como subtipos

// --strictNullChecks
let albumName: string;
// albumName = null;
// albumName = undefined;
