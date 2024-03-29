'use strict';
/* exported invert */
function invert(source) {
  const newObject = {};
  for (const key in source) {
    const value = source[key].toString();
    newObject[value] = key;
  }
  return newObject;
}
