'use strict';
/* exported isVowel */
function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  if (vowels.includes(char.toLowerCase())) {
    return true;
  }
  return false;
}
