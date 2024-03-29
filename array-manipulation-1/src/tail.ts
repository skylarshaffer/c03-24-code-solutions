/* exported tail */
function tail(array: unknown[]): unknown {
  const newArray = [];
  let index = 0;
  while (index < array.length) {
    if (index > 0) {
      newArray.push(array[index]);
    }
    index++;
  }
  return newArray;
}
