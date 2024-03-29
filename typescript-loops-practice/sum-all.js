'use strict';
/* exported sumAll */
function sumAll(numbers) {
  let sum = 0;
  for (const value in numbers) {
    sum += numbers[value];
  }
  return sum;
}
