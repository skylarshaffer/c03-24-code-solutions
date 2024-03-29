'use strict';
/* exported reverse */
function reverse(array) {
  const newArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    newArray.push(array[index]);
  }
  return newArray;
}
