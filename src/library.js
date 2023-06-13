export function isNumber(arg1, arg2) {
  if (typeof arg1 !== "number" || typeof arg2 !== "number") {
    return "There are no numbers";
  }
}

export function isString(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "There are no strings";
  }
}
