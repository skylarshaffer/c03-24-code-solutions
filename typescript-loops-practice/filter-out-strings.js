'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  const newArray = [];
  let i = 0;
  while (i < values.length) {
    if (typeof values[i] !== 'string') {
      newArray.push(values[i]);
    }
    i++;
  }
  return newArray;
}
