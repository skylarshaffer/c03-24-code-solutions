'use strict';
/* exported isLowerCased */
function isLowerCased(word) {
  let index = 0;
  while (index < word.length) {
    if (word[index].toLowerCase() !== word[index]) {
      return false;
    }
    index++;
  }
  return true;
}
