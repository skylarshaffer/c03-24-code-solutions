/* exported tail */
function tail(array) {
  let newArray = [];
  let last = array.length;
  let index = 0;
  while (index < last) {
    if (index > 0) {
      newArray.push(array[index]);
    }
    index++;
  }
  return newArray;
}
