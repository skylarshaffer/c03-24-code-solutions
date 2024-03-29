'use strict';
/* exported lastChars */
const lastChars = (length, string) => {
  let newString = string;
  if (string.length > length) {
    newString = string.slice(string.length - length);
  }
  return newString;
};
