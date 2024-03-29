'use strict';
/* exported omit */
function omit(source, keys) {
  const newObject = {};
  for (const key in source) {
    if (!keys.includes(key)) newObject[key] = source[key];
  }
  return newObject;
}
