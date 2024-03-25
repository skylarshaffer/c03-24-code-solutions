/* exported getWords */
function getWords(string) {
  let eval = true;
  let last = string.length;
  let array = [];
  let word = '';
  let index = 0;
  while (index <= last && string !== '') {
    if (string[index] === ' ' || index === last) {
      array.push(word);
      word = '';
    } else {
      word = word + string[index];
    }
    index++;
  }
  return array;
}
