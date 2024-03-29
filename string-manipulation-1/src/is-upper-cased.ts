/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  let index = 0;
  while (index < word.length) {
    if (word[index].toUpperCase() !== word[index]) {
      return false;
    }
    index++;
  }
  return true;
}
