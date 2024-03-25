/* exported getLastChar */
function getLastChars(string) {
  let newString = '';
  let last = string.length;
  let index = 0;
  while (index < last) {
    if (index > 0) {
      newString = newString + string[index];
    }
    index++;
  }
  return newString;
}

function getLastChar(string) {
  return string[string.length - 1];
}
