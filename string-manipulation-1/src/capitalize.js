'use strict';
/* exported capitalize */
function capitalize(word) {
  let newWord = '';
  let index = 0;
  while (index < word.length) {
    if (index > 0) {
      newWord += word[index].toLowerCase();
    } else {
      newWord += word[index].toUpperCase();
    }
    index++;
  }
  return newWord;
}
