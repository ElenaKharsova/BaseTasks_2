import { maxNumber, isCircleFitToSquare } from "./task2";

describe("Testing max number function", () => {
  let consoleLogMock;
  beforeEach(() => {
    consoleLogMock = jest.spyOn(console, "log");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("max of -2, 9865 is 9865", () => {
    maxNumber(-2, 9865);
    expect(consoleLogMock).toHaveBeenCalledTimes(1);
    expect(consoleLogMock).toHaveBeenCalledWith(9865);
  });
});

describe("Is circle fit to square function", () => {
  it("Circle area is less than square area", () => {
    expect(isCircleFitToSquare(4, 6)).toBeTruthy();
  });
  it("Circle area is more than square area", () => {
    expect(isCircleFitToSquare(6, 5)).toBeFalsy();
  });
  it("Circle diametre is equal as square's side", () => {
    expect(isCircleFitToSquare(Math.PI, 4)).toBeTruthy();
  });
});
