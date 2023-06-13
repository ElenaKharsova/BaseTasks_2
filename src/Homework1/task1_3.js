export function sumUserNumber() {
  const userNumber = prompt("Input triple number");
  if (!userNumber) {
    alert("You haven't input the number!");
  } else {
    const result = userNumber
      .split("")
      .map((el) => +el)
      .reduce((sum, current) => sum + current);
    if (Number.isNaN(result)) {
      alert("You have input incorrect symbols!");
    } else {
      console.log(result);
    }
  }
}
