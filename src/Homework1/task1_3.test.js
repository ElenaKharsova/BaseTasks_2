import { sumUserNumber } from "./task1_3";

describe("Checking function counts user's number", () => {
  let consoleLogMock;
  let originalPrompt;
  let originalAlert;

  beforeAll(() => {
    originalPrompt = window.prompt;
    originalAlert = window.alert;
    consoleLogMock = jest.spyOn(console, "log");
  });
  afterAll(() => {
    window.prompt = originalPrompt;
    jest.clearAllMocks();
    window.alert = originalAlert;
  });
  it("The number consists of digits", () => {
    jest.spyOn(window, "prompt").mockReturnValue("123");
    sumUserNumber();
    expect(window.prompt).toHaveLastReturnedWith("123");
    expect(consoleLogMock).toHaveBeenCalledWith(6);
  });
  it("The number contains letters", () => {
    jest.spyOn(window, "prompt").mockReturnValue("1b");
    jest
      .spyOn(window, "alert")
      .mockReturnValue("You have input incorrect symbols!");
    sumUserNumber();
    expect(window.prompt).toHaveLastReturnedWith("1b");
    expect(window.alert).toHaveBeenCalledWith(
      "You have input incorrect symbols!"
    );
  });
  it("The empty string insted of number", () => {
    jest.spyOn(window, "prompt").mockReturnValue("");
    jest
      .spyOn(window, "alert")
      .mockReturnValue("You haven't input the number!");
    sumUserNumber();
    expect(window.prompt).toHaveLastReturnedWith("");
    expect(window.alert).toHaveBeenCalledWith("You haven't input the number!");
  });
});
