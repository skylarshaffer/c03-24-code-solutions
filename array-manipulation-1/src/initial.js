'use strict';
/* exported initial */
function initial(array) {
  const newArray = [];
  let index = 0;
  while (index < array.length) {
    if (index !== array.length - 1) {
      newArray.push(array[index]);
    }
    index++;
  }
  return newArray;
}
