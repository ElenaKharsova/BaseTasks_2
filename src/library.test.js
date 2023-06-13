import { isNumber, isString } from "./library";

describe("Testing isNumber function", () => {
  it("Works only with numbers", () => {
    expect(isNumber("2", 2)).toBe("There are no numbers");
    expect(isNumber("", 2)).toBe("There are no numbers");
    expect(isNumber([1, 2], 2)).toBe("There are no numbers");
  });
});

describe("Testing isString function", () => {
  it("Dosen't work with numbers", () => {
    expect(isString("test", 2)).toBe("There are no strings");
  });
  it("dosen't work with arrays", () => {
    expect(isString([1, 2], "2")).toBe("There are no strings");
  });
});
