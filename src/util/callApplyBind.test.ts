import { runFile, addItem, addSnack, addBug } from "./callApplyBind";

describe("callApplyBind.ts", () => {
  const store = {
    storeName: "가게",
    location: "한국",
    itemList: ["아이템"],
    addItem: (arg: string) => {},
  };

  it("runFile active", () => {
    expect(runFile).not.toThrowError();
  });
  // it("addItem has no error", () => {
  //   expect(addItem.call(store, "string")).not.toThrowError();
  // });
  it("addSnack has no error", () => {
    expect(addSnack).not.toThrowError();
  });
  it("addBug has no error", () => {
    expect(addBug).not.toThrowError();
  });
});
