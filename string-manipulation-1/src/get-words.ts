/* exported getWords */
function getWords(string: string): string[] {
  const array = [];
  let word = '';
  let index = 0;
  if (string !== '') {
    while (index <= string.length) {
      if (string[index] === ' ' || index === string.length) {
        array.push(word);
        word = '';
      } else {
        word += string[index];
      }
      index++;
    }
  }
  return array;
}
