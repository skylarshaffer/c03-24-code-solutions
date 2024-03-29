/* exported sumAll */
function sumAll(numbers: number[]): number {
  let sum: number = 0;
  for (const value in numbers) {
    sum += numbers[value];
  }
  return sum;
}
