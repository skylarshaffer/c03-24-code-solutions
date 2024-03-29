/* exported chunk */
const chunk = (array: unknown[], size: number): unknown[] => {
  const newArray = [];
  let subArray = [];
  let index = 0;
  while (index < array.length) {
    subArray.push(array[index]);
    if ((index + 1) % size === 0 || index === array.length - 1) {
      newArray.push(subArray);
      subArray = [];
    }
    index++;
  }
  return newArray;
};
