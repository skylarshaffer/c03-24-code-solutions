'use strict';
/* exported take */
const take = (array, count) => {
  const newArray = [];
  let index = 0;
  while (index < array.length) {
    if (index < count) {
      newArray.push(array[index]);
    }
    index++;
  }
  return newArray;
};
