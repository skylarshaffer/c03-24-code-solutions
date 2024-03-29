/* exported reverse */
function reverse(array: unknown[]): unknown {
  const newArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    newArray.push(array[index]);
  }
  return newArray;
}
