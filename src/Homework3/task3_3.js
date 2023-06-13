import { isNumber } from "../library";

export function arithmeticMean() {
  const inputNumber = +prompt("Input natural odd number:");
  isNumber(inputNumber);
  if (Number.isInteger(inputNumber)) {
    const lastNumber = inputNumber % 2 === 0 ? inputNumber - 1 : inputNumber;
    const arithmeticMean = (1 + lastNumber) / 2;
    console.log(arithmeticMean);
  } else {
    console.log("You have input not natural number!");
  }
}
