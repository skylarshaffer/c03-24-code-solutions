'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const newArray = [];
  let i = 0;
  while (i < values.length) {
    if (values[i] != null) {
      newArray.push(values[i]);
    }
    i++;
  }
  return newArray;
}
