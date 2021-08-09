export {};

// ----------Type: void ----------

// Explicito

function showInfo(user: any): void {
  console.log("user info", user.id, user.username, user.firstName);
  // return "hola"
}

showInfo({ id: 1, username: "Edi", firstName: "Edilberto" });

// Inferido

function showFormattedInfo(user: any) {
  console.log(
    "user info",
    `id: ${user.id},
    username: ${user.username}, 
    firstName: ${user.firstName}`
  );
}

showFormattedInfo({ id: 1, username: "Edi", firstName: "Edilberto" });

// tipo void, como tipo de dato en variable
let unusable: void;
// unusable = null;
// unusable = undefined;

// ----------Type: Never----------

function handleError(code: number, message: string): never {
  // Process your code here
  // Generate a message
  throw new Error(`${message}. Code: ${code}`);
}

try {
  handleError(404, "Not Found");
} catch (error) {}

function sumNumbers(limit: number): never {
  let sum = 0;
  while (true) {
    sum++;
  }
}

// ciclo infinito
sumNumbers(20);
