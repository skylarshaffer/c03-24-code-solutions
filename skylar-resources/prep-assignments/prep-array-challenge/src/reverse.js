/* exported reverse */
function reverse(array) {
  let newArray = [];
  let last = array.length;
  let index = 0;
  for (let index = last - 1; index >= 0; index--) {
    newArray.push(array[index]);
  }
  return newArray;
}
