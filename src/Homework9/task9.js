export function isRightTriangle(lengthA, lengthB, lengthC) {
  function isRTriangle(lengthA, lengthB, lengthC) {
    if (Math.pow(lengthA, 2) === Math.pow(lengthB, 2) + Math.pow(lengthC, 2)) {
      return true;
    } else {
      return false;
    }
  }

  if (lengthA > lengthB) {
    return lengthA > lengthC
      ? isRTriangle(lengthA, lengthB, lengthC)
      : isRTriangle(lengthC, lengthB, lengthA);
  } else {
    return lengthB > lengthC
      ? isRTriangle(lengthB, lengthA, lengthC)
      : isRTriangle(lengthC, lengthB, lengthA);
  }
}

export function calculateCircleLengthSquare() {
  const radius = prompt("Input a radius of circle");
  if (!radius) {
    alert("You haven't input the number!");
  } else {
    if (typeof radius !== "number") {
      return "This is not a number";
    }
    const circleLength = 2 * Math.PI * radius;
    const circleSquare = Math.PI * Math.pow(radius, 2);
    console.log(circleLength, circleSquare);
  }
}

export function calculateRootsQuadraticEquation() {
  const coefficientes = prompt("Input coefficientes a, b, c");
  const [a, b, c] = coefficientes.split(",");
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant < 0) {
    alert("There are no roots in the equality");
  }
  if (discriminant === 0) {
    const x = -b / (2 * a);
    console.log(`There are 2 equals roots ${x}`);
  }
  const x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
  const x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
  console.log(`Roots: ${x1}, ${x2}`);
}
