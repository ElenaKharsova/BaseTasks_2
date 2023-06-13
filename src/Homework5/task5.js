function createAray(array = [1, 7, 3, 9, 2, 0, -50, 40, -21, 8]) {
  const newArray = array;
  return newArray;
}

export function sumArrayElements(array) {
  const arrayBase = createAray(array);
  const sumArrayElements = arrayBase.reduce((sum, current) => sum + current);
  console.log(sumArrayElements);
}

export function createArrayDoubleElements(array) {
  const arrayBase = createAray(array);
  const newArray = [];
  for (let i = 0; i < arrayBase.length; i++) {
    newArray.push(arrayBase[i] * 2);
  }
  return newArray;
}

export function findArrayExtremums(array) {
  const arrayBase = createAray(array);
  const maxValue = Math.max(...arrayBase);
  const minValue = Math.min(...arrayBase);
  console.log(`max, min: ${maxValue}, ${minValue}`);
}
