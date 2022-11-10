function add(a: number, b: number) {
  return a + b;
}

function printResult(num: number) {
  console.log(`result: ${num}`);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const RESULT = n1 + n2;
  cb(RESULT);
}

let combineValues: (a: number, b: number) => number;

combineValues = add;

// console.log(addAndHandle(5, 5, printResult));

export { printResult, add, addAndHandle, combineValues };
