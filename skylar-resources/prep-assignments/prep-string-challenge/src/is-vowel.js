/* exported isVowel */
function isVowel(char) {
  const newChar = char.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(newChar)) {
    eval = true;
  } else {
    eval = false;
  }
  return eval;
}
