'use strict';
/* exported getIndexes */
function getIndexes(array) {
  const indexes = [];
  let i = 0;
  while (i < array.length) {
    indexes.push(i);
    i++;
  }
  return indexes;
}
