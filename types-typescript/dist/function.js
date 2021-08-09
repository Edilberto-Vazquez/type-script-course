"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function createPicture(title: string, date: string, size: SquareSize) {
//   // Se crea la Fotografía
//   console.log("create Picture useing", title, date, size);
// }
// createPicture("My Birthday", "2020-03-10", "500x500");
// createPicture("Colombia Trip", "2020-03");
// Parametro Opcionales en funciones
function createPicture(title, date, size) {
    // Se crea la Fotografía
    console.log("create Picture using", title, date, size);
}
createPicture("My Birthday", "2020-03-10", "500x500");
createPicture("Colombia Trip", "2020-03");
// Flat Array Function
const createPic = (title, date, size) => {
    //   return {
    //     title: title,
    //     date: date,
    //     size: size,
    //   };
    return { title, date, size };
};
const picture = createPic("Platzi session", "2020-03-10", "100x100");
console.log("picture", picture);
// Tipo de reterno con TypeScript
function handleError(code, message) {
    // Procesamiento del codigo, mensaje
    if (message === "error") {
        throw new Error(`${message}. Code error: ${code}`);
    }
    else {
        return "An error has occurred";
    }
}
try {
    let result = handleError(200, "OK"); // string
    console.log("result", result);
    result = handleError(404, "error"); // never
    console.log("result", result);
}
catch (error) { }
