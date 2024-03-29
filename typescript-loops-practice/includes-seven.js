'use strict';
/* exported includesSeven */
function includesSeven(array) {
  let i = 0;
  let isIncludesSeven = false;
  while (i < array.length) {
    if (array[i] === 7) {
      isIncludesSeven = true;
    }
    i++;
  }
  return isIncludesSeven;
}
