'use strict';
/* exported getKeys */
function getKeys(object) {
  const newArray = [];
  for (const value in object) {
    newArray.push(value);
  }
  return newArray;
}
