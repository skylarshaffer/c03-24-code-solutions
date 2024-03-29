'use strict';
/* exported includes */
const includes = (array, value) => {
  let index = 0;
  while (index < array.length) {
    if (array[index] === value) {
      return true;
    }
    index++;
  }
  return false;
};
