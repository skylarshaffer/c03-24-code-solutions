'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newArray = [];
  for (const key in words) {
    newArray.push(words[key] + suffix);
  }
  return newArray;
}
