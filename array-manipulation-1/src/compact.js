'use strict';
/* exported compact */
function compact(array) {
  const newArray = [];
  let index = 0;
  while (index < array.length) {
    if (array[index]) {
      newArray.push(array[index]);
    }
    index++;
  }
  return newArray;
}
