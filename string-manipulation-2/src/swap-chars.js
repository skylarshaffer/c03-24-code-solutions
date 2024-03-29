'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const newArray = Array.from(string);
  newArray.splice(firstIndex, 1, string[secondIndex]);
  newArray.splice(secondIndex, 1, string[firstIndex]);
  return newArray.join('');
}
