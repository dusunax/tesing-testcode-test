import { printResult, add, addAndHandle, combineValues } from "./addAndHandle";

describe("add", () => {
  it("add function works", () => {
    expect(add(1, 2)).toBeDefined();
    expect(add(1, 2)).not.toBeNaN();
  });
  it("add function returns correct answer", () => {
    expect(add(1, 2)).toBe(1 + 2);
  });
});

describe("printResult", () => {
  it("printResult return void", () => {
    expect(printResult(1)).toBeUndefined();
  });
});

describe("addAndHandle", () => {
  it("addAndHandle return void", () => {
    expect(addAndHandle(1, 2, printResult)).toBeUndefined();
  });
});

describe("combineValues", () => {
  it("combineValues function works", () => {
    expect(combineValues(1, 2)).toBeDefined();
    expect(combineValues(1, 2)).not.toBeNaN();
  });
  it("combineValues function returns correct answer", () => {
    expect(combineValues(1, 2)).toBe(1 + 2);
  });
});
