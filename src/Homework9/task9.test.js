import {
  isRightTriangle,
  calculateCircleLengthSquare,
  calculateRootsQuadraticEquation,
} from "./task9";

describe("Testing function isRightTriangle", () => {
  it("Right triangle. Third side is hypotenuse", () => {
    expect(isRightTriangle(8, 6, 10)).toBeTruthy();
  });
  it("Right triangle. Second side is hypotenuse", () => {
    expect(isRightTriangle(5, 13, 12)).toBeTruthy();
  });
  it("Right triangle. First side is hypotenuse", () => {
    expect(isRightTriangle(5, 3, 4)).toBeTruthy();
  });
  it("Is not a right triangle", () => {
    expect(isRightTriangle(1, 2, 3)).toBeFalsy();
    expect(isRightTriangle(1, -3, 2)).toBeFalsy();
    expect(isRightTriangle(3, 3, 3)).toBeFalsy();
  });
});
describe("Testing function calculateCircleLengthSquare", () => {
  let consoleLogMock;
  let windowPromptMock;
  let windowAlertMock;
  beforeEach(() => {
    consoleLogMock = jest.spyOn(console, "log");
    windowPromptMock = window.prompt;
    windowAlertMock = window.alert;
  });
  afterEach(() => {
    window.prompt = windowPromptMock;
    window.alert = windowAlertMock;
    jest.clearAllMocks();
  });
  it("Has input not a number", () => {
    jest.spyOn(window, "prompt").mockReturnValue("1na");
    expect(calculateCircleLengthSquare()).toBe("This is not a number");
  });
  it("Has input empty string", () => {
    jest.spyOn(window, "prompt").mockReturnValue("");
    jest
      .spyOn(window, "alert")
      .mockReturnValue("You haven't input the number!");
    calculateCircleLengthSquare();
    expect(window.alert).toHaveBeenLastCalledWith(
      "You haven't input the number!"
    );
  });
  it("Radius is 5", () => {
    jest.spyOn(window, "prompt").mockReturnValue(5);
    calculateCircleLengthSquare();
    const circleLength = 10 * Math.PI;
    const circleSquare = Math.PI * 25;
    expect(consoleLogMock).toHaveBeenCalledWith(circleLength, circleSquare);
  });
});
describe("Testing function calculateRootsQuadraticEquation", () => {
  let consoleLogMock;
  let windowPromptMock;
  let windowAlertMock;
  beforeEach(() => {
    consoleLogMock = jest.spyOn(console, "log");
    windowPromptMock = window.prompt;
    windowAlertMock = window.alert;
  });
  afterEach(() => {
    window.prompt = windowPromptMock;
    window.alert = windowAlertMock;
    jest.clearAllMocks();
  });
  it("There are no roots", () => {
    jest.spyOn(window, "prompt").mockReturnValue("5, 3, 2");
    jest
      .spyOn(window, "alert")
      .mockReturnValue("There are no roots in the equality");
    calculateRootsQuadraticEquation();
    expect(window.alert).toHaveBeenCalledWith(
      "There are no roots in the equality"
    );
  });
  it("There are 2 equales roots", () => {
    jest.spyOn(window, "prompt").mockReturnValue("1, -4, 4");
    calculateRootsQuadraticEquation();
    expect(consoleLogMock).toHaveBeenCalledWith("There are 2 equals roots 2");
  });
  it("There are 2 roots", () => {
    jest.spyOn(window, "prompt").mockReturnValue("1, -1, -2");
    calculateRootsQuadraticEquation();
    expect(consoleLogMock).toHaveBeenCalledWith("Roots: -1, 2");
  });
});
