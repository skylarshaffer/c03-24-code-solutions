/* exported initial */
function initial(array) {
  let newArray = [];
  let last = array.length;
  let index = 0;
  while (index < last) {
    if (index != last - 1) {
      newArray.push(array[index]);
    }
    index++;
  }
  return newArray;
}
