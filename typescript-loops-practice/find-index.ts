/* exported findIndex */
function findIndex(array: unknown[], value: unknown): number {
  let arrayIndex = -1;
  let i = 0;
  while (i < array.length) {
    if (array[i] === value) {
      arrayIndex = i;
      return arrayIndex;
    }
    i++;
  }
  return arrayIndex;
}
