import { isNumber } from "../library";

export function diff(number1, number2) {
  isNumber(number1, number2);
  return number1 > number2 ? number1 - number2 : number2 - number1;
}

export function isWord(textString) {
  if (typeof textString !== "string") return "This is not a string!";
  const newArray = textString.split(" ");
  return newArray.length > 1 ? false : true;
}

export function pow(a, x) {
  let poweredNumber = a;
  if (x === 0) {
    return 1;
  }

  for (let i = 1; i < Math.abs(x); i++) {
    poweredNumber = poweredNumber * a;
  }

  if (x > 0) {
    return poweredNumber;
  } else {
    return 1 / poweredNumber;
  }
}
