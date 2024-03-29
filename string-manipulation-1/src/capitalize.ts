/* exported capitalize */
function capitalize(word: string): string {
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
