'use strict';
/* exported firstChars */
const firstChars = (length, string) => {
  let newString = '';
  let i = 0;
  while (i < string.length) {
    if (i < length) {
      newString += string[i];
    }
    i++;
  }
  return newString;
};
