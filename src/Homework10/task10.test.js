import { checkDate, checkEmail, checkPhone } from "./task10";

let windowAlertMock;
beforeEach(() => {
  windowAlertMock = window.alert;
});
afterEach(() => {
  window.alert = windowAlertMock;
});

describe("Testing gunction checkDate", () => {
  it("Check correct date", () => {
    jest.spyOn(window, "prompt").mockReturnValue("14.09.2045");
    expect(checkDate()).toBeTruthy();
  });
  it("Check incorrect date", () => {
    jest.spyOn(window, "prompt").mockReturnValue("09.2045");
    jest
      .spyOn(window, "alert")
      .mockReturnValue("You have input incorrect date!");
    checkDate();
    expect(window.alert).toHaveBeenCalledWith("You have input incorrect date!");
  });
});
describe("Testing gunction checkEmail", () => {
  it("Check correct email", () => {
    jest.spyOn(window, "prompt").mockReturnValue("jhguy@ikhioj.efwf");
    expect(checkEmail()).toBeTruthy();
  });
  it("Check incorrect date", () => {
    jest.spyOn(window, "prompt").mockReturnValue("jhguy@ikhioj.");
    jest
      .spyOn(window, "alert")
      .mockReturnValue("You have input incorrect email!");
    checkEmail();
    expect(window.alert).toHaveBeenCalledWith(
      "You have input incorrect email!"
    );
  });
});
describe("Testing gunction checkPhone", () => {
  it("Check correct date", () => {
    jest.spyOn(window, "prompt").mockReturnValue("+79052222222");
    expect(checkPhone()).toBeTruthy();
  });
  it("Check incorrect date", () => {
    jest.spyOn(window, "prompt").mockReturnValue("8901393565");
    jest
      .spyOn(window, "alert")
      .mockReturnValue("You have input incorrect phone number!");
    checkPhone();
    expect(window.alert).toHaveBeenCalledWith(
      "You have input incorrect phone number!"
    );
  });
});
