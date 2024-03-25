/* exported capitalize */
function capitalize(word) {
  let newWord = '';
  let last = word.length;
  let index = 0;
  while (index < last) {
    if (index > 0) {
      newWord = newWord + word[index].toLowerCase();
    } else {
      newWord = newWord + word[index].toUpperCase();
    }
    index++;
  }
  return newWord;
}
