'use strict';
/* exported dropRight */
const dropRight = (array, count) => {
  const newArray = [];
  let index = 0;
  while (index < array.length) {
    if (index < array.length - count) {
      newArray.push(array[index]);
    }
    index++;
  }
  return newArray;
};
