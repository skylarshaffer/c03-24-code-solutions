'use strict';
/* exported countdown */
function countdown(number) {
  const numbers = [];
  while (number >= 0) {
    numbers.push(number);
    number--;
  }
  return numbers;
}
