function add(a, b) {
    return a + b;
}
function printResult(num) {
    console.log("result: ".concat(num));
    return num;
}
function addAndHandle(n1, n2, cb) {
    var RESULT = n1 + n2;
    cb(RESULT);
}
var combineValues;
var addFive;
combineValues = add;
console.log(addAndHandle(5, 5, printResult));
export { printResult, add, addAndHandle, combineValues, addFive };
//# sourceMappingURL=addAndHandle.js.map