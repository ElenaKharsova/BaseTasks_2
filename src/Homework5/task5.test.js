import {
  sumArrayElements,
  createArrayDoubleElements,
  findArrayExtremums,
} from "./task5";

let consoleLogMock;

beforeEach(() => {
  consoleLogMock = jest.spyOn(console, "log");
});

afterEach(() => {
  jest.clearAllMocks();
});
describe("Testing arrays", () => {
  it("Summing array elements", () => {
    sumArrayElements([1, 2, 3, 4, -2, 0, 0, 5, -6, 8]);
    expect(consoleLogMock).toHaveBeenCalledWith(15);
  });
  it("Summing array elements with empty argument", () => {
    sumArrayElements();
    expect(consoleLogMock).toHaveBeenCalledWith(-1);
  });
  it("Array elements are doubled", () => {
    const newArray = createArrayDoubleElements([
      1, 2, 3, 4, -5, 6, -7, 0, 8, -9,
    ]);
    expect(newArray.toString()).toBe("2,4,6,8,-10,12,-14,0,16,-18");
  });
  it("Array elements are doubled with empty argument", () => {
    const newArray = createArrayDoubleElements();
    expect(newArray.toString()).toBe("2,14,6,18,4,0,-100,80,-42,16");
  });

  it("Array elements are doubled", () => {
    findArrayExtremums([1, 2, 3, 4, -5, 6, -7, 0, 8, -9]);
    expect(consoleLogMock).toHaveBeenCalledWith("max, min: 8, -9");
  });
  it("Array elements are doubled with empty argument", () => {
    findArrayExtremums();
    expect(consoleLogMock).toHaveBeenCalledWith("max, min: 40, -50");
  });
});
