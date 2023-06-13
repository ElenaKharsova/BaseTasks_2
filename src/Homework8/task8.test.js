import { userDate, countDayMinutes, youngestUser } from "./task8";

describe("Testing fuction userDate", () => {
  let consoleLogMock;
  let windowPromptMock;
  let windowAlertMock;
  beforeEach(() => {
    consoleLogMock = jest.spyOn(console, "log");
    windowPromptMock = window.prompt;
    windowAlertMock = window.alert;
  });
  afterEach(() => {
    jest.clearAllMocks();
    window.prompt = windowPromptMock;
    window.alert = windowAlertMock;
  });
  it("The input string is empty", () => {
    jest.spyOn(window, "prompt").mockReturnValue("");
    jest.spyOn(window, "alert").mockReturnValue("You haven't input the date!");
    userDate();
    expect(window.prompt).toHaveLastReturnedWith("");
    expect(window.alert).toHaveBeenCalledWith("You haven't input the date!");
  });
  it("08/05/2023 is incorrect date", () => {
    jest.spyOn(window, "prompt").mockReturnValue("08/05/2023");
    jest.spyOn(window, "alert").mockReturnValue("Incorrect type of the date");
    userDate();
    expect(window.alert).toHaveLastReturnedWith("Incorrect type of the date");
  });
  it.each([
    ["08.05.2023", "Monday"],
    ["09.05.2023", "Tuesday"],
    ["10.05.2023", "Wednesday"],
    ["11.05.2023", "Thursday"],
    ["12.05.2023", "Friday"],
    ["13.05.2023", "Saturday"],
    ["14.05.2023", "Sunday"],
  ])("%i is %j", (date, expected) => {
    jest.spyOn(window, "prompt").mockReturnValue(date);
    userDate();
    expect(consoleLogMock).toHaveBeenCalledWith(`Today is ${expected}`);
  });
});

describe("Testing fuction countDayMinutes", () => {
  let consoleLogMock;
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2020, 3, 1, 23, 55, 13));
    consoleLogMock = jest.spyOn(console, "log");
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  it("Has left 1435 minutes", () => {
    countDayMinutes();
    expect(consoleLogMock).toHaveBeenCalledWith(1435);
  });
});

describe("Testing fuction youngestUser", () => {
  it("First user is younger", () => {
    expect(youngestUser("03.05.1986", "03.05.1977")).toBe("03.05.1986");
  });
  it("Second user is younger", () => {
    expect(youngestUser("03.01.1996", "01.05.2007")).toBe("01.05.2007");
  });
});
