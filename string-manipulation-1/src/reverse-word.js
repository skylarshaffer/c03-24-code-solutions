'use strict';
/* exported reverseWord */
function reverseWord(word) {
  let newWord = '';
  for (let index = word.length - 1; index >= 0; index--) {
    newWord += word[index];
  }
  return newWord;
}
