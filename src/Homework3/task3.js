export function sumNaturalNumbers() {
  const firstNumber = 50;
  const lastNumber = 100;
  const totalNumbers = 50;
  const sumNaturalNumbers = ((firstNumber + lastNumber) / 2) * totalNumbers;
  console.log(sumNaturalNumbers);
}

export function multiplacationTable() {
  const numberMultiplication = 7;
  const lastNumber = 10;
  let multiplacationTable = "";
  for (let i = 1; i < lastNumber; i++) {
    multiplacationTable += `${numberMultiplication} x ${i} = ${
      numberMultiplication * i
    }`;
    if (i !== lastNumber - 1) {
      multiplacationTable += "\n";
    }
  }
  console.log(multiplacationTable);
}
