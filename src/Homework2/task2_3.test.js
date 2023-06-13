import { monthsPresented } from "./task2_3";

describe("Testing function months presented", () => {
  let consoleLogMock;
  let windowPromptMock;

  beforeEach(() => {
    consoleLogMock = jest.spyOn(console, "log");
    windowPromptMock = window.prompt;
  });
  afterEach(() => {
    jest.clearAllMocks();
    window.prompt = windowPromptMock;
  });
  it.each([
    ["1", "январь"],
    ["2", "февраль"],
    ["3", "март"],
    ["4", "апрель"],
    ["5", "май"],
    ["6", "июнь"],
    ["7", "июль"],
    ["8", "август"],
    ["9", "сентябрь"],
    ["10", "октябрь"],
    ["11", "ноябрь"],
    ["12", "декабрь"],
  ])("User has input number %i, ", (monthNumber, expected) => {
    jest.spyOn(window, "prompt").mockReturnValue(monthNumber);
    monthsPresented();
    expect(window.prompt).toHaveLastReturnedWith(monthNumber);
    expect(consoleLogMock).toHaveBeenCalledWith(expected);
  });

  it("User has input number not from 1 to 12", () => {
    jest.spyOn(window, "prompt").mockReturnValue("0");
    monthsPresented();
    expect(window.prompt).toHaveLastReturnedWith("0");
    expect(consoleLogMock).toHaveBeenCalledWith(
      "The number is not included in the boundaries"
    );
  });
});
