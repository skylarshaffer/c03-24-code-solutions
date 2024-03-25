/* exported isUpperCased */
function isUpperCased(word) {
  let eval = true;
  let newLetter = '';
  let last = word.length;
  let index = 0;
  while (index < last) {
    if (word[index].toUpperCase() !== word[index]) {
      eval = false;
    }
    index++;
  }
  return eval;
}
