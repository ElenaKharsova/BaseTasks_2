import { arithmeticMean } from "./task3_3";

let windowPromtMock;
let consoleLogMock;

beforeEach(() => {
  consoleLogMock = jest.spyOn(console, "log");
  windowPromtMock = window.prompt;
});
afterEach(() => {
  jest.clearAllMocks();
  window.prompt = windowPromtMock;
});
describe("Testing function arithmeticMean", () => {
  it("Arithmetic meaning all odds numbers from 1 to 15 is 8", () => {
    jest.spyOn(window, "prompt").mockReturnValue(15);
    arithmeticMean();
    expect(consoleLogMock).toHaveBeenCalledWith(8);
  });
  it("Arithmetic meaning all odds numbers from 1 to 10 is 5", () => {
    jest.spyOn(window, "prompt").mockReturnValue(10);
    arithmeticMean();
    expect(consoleLogMock).toHaveBeenCalledWith(5);
  });
  it("Inputed number is not natural", () => {
    jest.spyOn(window, "prompt").mockReturnValue(15.5);
    arithmeticMean();
    expect(consoleLogMock).toHaveBeenCalledWith(
      "You have input not natural number!"
    );
  });
});
