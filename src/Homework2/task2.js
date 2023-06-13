import { isNumber } from "../library";

export function maxNumber(a, b) {
  isNumber(a, b);
  console.log(Math.max(a, b));
}

export function isCircleFitToSquare(circleArea, squareArea) {
  isNumber(circleArea, squareArea);
  const sideSquareSquared = squareArea;
  const diameterCircleSquared = (4 * circleArea) / Math.PI;
  return diameterCircleSquared <= sideSquareSquared;
}
