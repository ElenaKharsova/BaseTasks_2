import { diff, isWord, pow } from "./task6";

describe("Testing function diff", () => {
  it("First number is more than second", () => {
    expect(diff(6, -7)).toBe(13);
  });
  it("First number is less than second", () => {
    expect(diff(-7, 6)).toBe(13);
  });
  it("First number is more than second, both numbers are positive", () => {
    expect(diff(6, 7)).toBe(1);
  });
  it("First number is less than second, both numbers are positive", () => {
    expect(diff(7, 6)).toBe(1);
  });
  it("The first number is tha same as the second number", () => {
    expect(diff(7, 7)).toBe(0);
  });
});

describe("Testing function isWorld", () => {
  it("Argument isn't a string", () => {
    expect(isWord(6, -7)).toBe("This is not a string!");
  });
  it("Argument is a string", () => {
    expect(isWord("Hi, my name is Lena")).toBeFalsy();
  });
  it("Argument is a word", () => {
    expect(isWord("Hello")).toBeTruthy();
  });
});

describe("Testing function pow", () => {
  it("The power is 0", () => {
    expect(pow(6, 0)).toBe(1);
  });
  it("The power is positive", () => {
    expect(pow(6, 3)).toBe(216);
  });
  it("The power is negative", () => {
    expect(pow(5, -3)).toBe(0.008);
  });
});
