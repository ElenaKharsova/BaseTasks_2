import { createSection } from "./task7";

describe("Check UI", () => {
  let mainElement;

  beforeEach(() => {
    mainElement = document.createElement("div");
    createSection(mainElement);
  });

  it("The new struction consists input, 3 paragraphs", () => {
    expect(mainElement.querySelector("input")).toBeTruthy();
    expect(mainElement.querySelectorAll("p").length).toBe(3);
  });
  it("The value of input is empty in the new struction", () => {
    expect(mainElement.querySelector("input").value).toBe("");
  });
  it("A button is hidden in the new struction", () => {
    expect(
      mainElement.querySelector("button").classList.contains("hidden")
    ).toBeTruthy();
  });
  it("Click on the button adds a new paragraph with text from input", () => {
    mainElement.querySelector("input").value = "Test";
    mainElement.querySelector("button").click();

    const length = mainElement.querySelectorAll("p").length;
    expect(length).toBe(4);
    expect(mainElement.querySelectorAll("p")[length - 1].innerHTML).toBe(
      "Test"
    );
  });
  it("If we add more than 5 paragraphs, the first paragrapf is removed", () => {
    for (let i = 0; i < 3; i++) {
      mainElement.querySelector("input").value = `Test ${i}`;
      mainElement.querySelector("button").click();
    }

    expect(mainElement.querySelectorAll("p").length).toBe(5);
    expect(mainElement.querySelectorAll("p")[0].innerHTML).toBe("Text 1");
    expect(mainElement.querySelectorAll("p")[4].innerHTML).toBe("Test 2");
  });
});
