/* exported compact */
function compact(array: unknown[]): unknown {
  const newArray = [];
  let index = 0;
  while (index < array.length) {
    if (array[index]) {
      newArray.push(array[index]);
    }
    index++;
  }
  return newArray;
}
