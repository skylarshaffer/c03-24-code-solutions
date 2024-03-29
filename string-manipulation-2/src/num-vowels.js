'use strict';
/* exported numVowels */
function numVowels(string) {
  //  init total
  let vowelCountTotal = 0;
  //  list guaranteed vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  //  split string to array by space
  const splitString = string.split(' ');
  //  for each string in array
  for (const key in splitString) {
    let i = 0;
    //  init count
    let vowelCount = 0;
    while (i < splitString[key].length) {
      //  get char at index
      const char = splitString[key][i].toLowerCase();
      //  if guaranteed vowels array contains char
      if (vowels.includes(char)) {
        vowelCount++;
      }
      i++;
    }
    //  if no guaranteed vowels AND there is a y
    if (vowelCount === 0 && key.toUpperCase().includes('Y')) {
      vowelCount++;
    }
    //  increment total by word vowel count
    vowelCountTotal += vowelCount;
  }
  return vowelCountTotal;
}
