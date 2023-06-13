export function createSection(element) {
  let div = document.createElement("div");
  const input = document.createElement("input");
  const button = document.createElement("button");
  button.innerHTML = "Save";
  button.classList.add("hidden");
  div.appendChild(input);
  div.appendChild(button);
  element.appendChild(div);
  div = document.createElement("div");
  element.appendChild(div);

  for (let i = 0; i < 3; i++) {
    const p = document.createElement("p");
    p.innerHTML = `Text ${i}`;
    div.appendChild(p);
  }

  element.querySelector("button").addEventListener("click", createParagraph);
  element.querySelector("input").addEventListener("input", hideButton);

  function hideButton() {
    input.value
      ? button.classList.remove("hidden")
      : button.classList.add("hidden");
  }

  function createParagraph() {
    const p = document.createElement("p");
    p.innerHTML = input.value;
    div.appendChild(p);
    const allParagraphs = element.querySelectorAll("div p");

    if (allParagraphs.length > 5) {
      const firstParagraph = element.querySelector("div p");
      firstParagraph.remove();
    }

    input.value = "";
    button.classList.add("hidden");
  }
}
