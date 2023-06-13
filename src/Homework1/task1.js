import { isNumber, isString } from "../library";

export function sum(arg1, arg2) {
  isNumber(arg1, arg2);
  console.log(arg1 + arg2);
}

export function multiplication(arg1, arg2) {
  isNumber(arg1, arg2);
  console.log(arg1 * arg2);
}

export function countStringSymbols(string1, string2) {
  isString(string1, string2);
  console.log(string1.length + string2.length);
}
