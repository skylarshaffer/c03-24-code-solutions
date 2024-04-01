'use strict';
/* exported pick */
function pick(source, keys) {
  const newObject = {};
  for (const key in keys) {
    if (source[keys[key]] !== undefined) {
      newObject[keys[key]] = source[keys[key]];
    }
  }
  return newObject;
}
