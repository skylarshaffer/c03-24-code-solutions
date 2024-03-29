'use strict';
/* exported tail */
function tail(array) {
  const newArray = [];
  let index = 0;
  while (index < array.length) {
    if (index > 0) {
      newArray.push(array[index]);
    }
    index++;
  }
  return newArray;
}
