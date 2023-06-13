import { objects } from "./task4";

describe("Testing function objects", () => {
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
  it("All data has been created correctly", () => {
    jest.spyOn(window, "prompt").mockReturnValue(55);
    objects();
    expect(consoleLogMock).toHaveBeenCalledWith(
      "name, age, role: John 55 admin"
    );
  });
});
