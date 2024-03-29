'use strict';
/* exported getValues */
function getValues(object) {
  const newArray = [];
  for (const key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}
