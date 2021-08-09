// Corchetes

// Explicito
let array: string[];
array = ["a01", "b02", "b03"];
// array = [1, true, "test"]; // Error

// Inferido
let otherArray = ["01a", "02b", "03c"];
// otherArray = [1, true, "text"]; // Error

// Array<TYPE>

let pictureTitles: Array<string>;
pictureTitles = ["01", "02", "03"];

// Accediendo a los valores en un Array
console.log("first value", array[0]);
console.log("first title", pictureTitles[0]);

// Propiedades en Array
console.log("array.lengh", array.length);

// Uso de funciones en Arrays
array.push("Platzi user");
array.sort();
console.log("array", array);
