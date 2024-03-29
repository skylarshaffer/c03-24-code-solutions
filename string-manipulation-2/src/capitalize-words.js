'use strict';
/* exported capitalizeWords */
const capitalizeWordIsolated = (word) => {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    let newString = '';
    newString = word[0].toUpperCase();
    newString += word.slice(1).toLowerCase();
    return newString;
  }
};
const capitalizeWords = (string) => {
  const stringArray = string.split(' ');
  for (const key in stringArray) {
    stringArray[key] = capitalizeWordIsolated(stringArray[key]);
  }
  return stringArray.join(' ');
};
