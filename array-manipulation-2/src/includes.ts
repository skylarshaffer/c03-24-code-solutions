/* exported includes */
const includes = (array: unknown[], value: unknown): boolean => {
  let index = 0;
  while (index < array.length) {
    if (array[index] === value) {
      return true;
    }
    index++;
  }
  return false;
};
