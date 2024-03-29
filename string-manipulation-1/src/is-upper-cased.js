'use strict';
/* exported isUpperCased */
function isUpperCased(word) {
  let index = 0;
  while (index < word.length) {
    if (word[index].toUpperCase() !== word[index]) {
      return false;
    }
    index++;
  }
  return true;
}
