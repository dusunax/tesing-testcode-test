let userInput: unknown;
let userName: string;
let userAge: number;

userInput = 5;
userInput = "Hi";
if (typeof userInput === "string") {
  userName = userInput;
}
if (typeof userInput === "number") {
  userAge = userInput;
}

function generateError(msg: string, code: number): never {
  throw new Error(msg);
}

let something = false;
if (something) {
  generateError("an 에레러러 occurred", 500);
}

export { userName, userAge, generateError };
