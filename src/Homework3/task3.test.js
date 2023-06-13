import { sumNaturalNumbers, multiplacationTable } from "./task3";

let consoleLogMock;

beforeEach(() => {
  consoleLogMock = jest.spyOn(console, "log");
});
afterEach(() => {
  jest.clearAllMocks();
});

describe("Testing function sumNaturalNumbers", () => {
  it("Sum of natural numbers from 50 to 100 is 3750", () => {
    sumNaturalNumbers();
    expect(consoleLogMock).toHaveBeenCalledWith(3750);
  });
});

describe("Testing function export function multiplacationTable", () => {
  it("Multiplacation Table from 1 to 9 for 7", () => {
    multiplacationTable();
    expect(consoleLogMock).toHaveBeenCalledWith(
      `7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63`
    );
  });
});
