/* exported compact */
function compact(array) {
  let newArray = [];
  let bannedValues = [false, null, NaN, 0, -0, undefined, ''];
  let last = array.length;
  let index = 0;
  while (index < last) {
    if (bannedValues.includes(array[index])) {
    } else {
      newArray.push(array[index]);
    }
    index++;
  }
  return newArray;
}
