import { generateError } from "./unknownAndNever";

describe("generateError", () => {
  it("generateError throw error", () => {
    expect(() => generateError("new error", 500)).toThrow();
  });
  it("generateError throw exact error msg", () => {
    expect(() => generateError("new error", 500)).toThrow(/new error/);
  });
});
