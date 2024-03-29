/* exported dropRight */
const dropRight = (array: unknown[], count: number): unknown[] => {
  const newArray = [];
  let index = 0;
  while (index < array.length) {
    if (index < array.length - count) {
      newArray.push(array[index]);
    }
    index++;
  }
  return newArray;
};
