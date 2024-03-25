/* exported reverseWord */
function reverseWord(word) {
  let newWord = '';
  let last = word.length;
  for (let index = last - 1; index >= 0; index--) {
    newWord = newWord + word[index];
  }
  return newWord;
}
