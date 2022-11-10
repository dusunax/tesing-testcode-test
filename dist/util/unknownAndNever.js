var userInput;
var userName;
var userAge;
userInput = 5;
userInput = "Hi";
if (typeof userInput === "string") {
    userName = userInput;
}
if (typeof userInput === "number") {
    userAge = userInput;
}
function generateError(msg, code) {
    throw new Error(msg);
}
generateError("an 에레러러 occurred", 500);
export { userName, userAge, generateError };
//# sourceMappingURL=unknownAndNever.js.map