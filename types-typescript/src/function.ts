export {};

// ----------functions-----------

// function createPicture(title, date, size) {
//     // title
// }

// Usamos TS, se definen tipos para parametros

type SquareSize = "100x100" | "500x500" | "1000x1000";

// function createPicture(title: string, date: string, size: SquareSize) {
//   // Se crea la Fotografía
//   console.log("create Picture useing", title, date, size);
// }

// createPicture("My Birthday", "2020-03-10", "500x500");
// createPicture("Colombia Trip", "2020-03");

// Parametro Opcionales en funciones

function createPicture(title?: string, date?: string, size?: SquareSize) {
  // Se crea la Fotografía
  console.log("create Picture using", title, date, size);
}

createPicture("My Birthday", "2020-03-10", "500x500");
createPicture("Colombia Trip", "2020-03");

// Flat Array Function

const createPic = (title: string, date: string, size: SquareSize): object => {
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

function handleError(code: number, message: String): never | string {
  // Procesamiento del codigo, mensaje
  if (message === "error") {
    throw new Error(`${message}. Code error: ${code}`);
  } else {
    return "An error has occurred";
  }
}

try {
  let result = handleError(200, "OK"); // string
  console.log("result", result);

  result = handleError(404, "error"); // never
  console.log("result", result);
} catch (error) {}
