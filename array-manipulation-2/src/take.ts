/* exported take */
const take = (array: unknown[], count: number): unknown[] => {
  const newArray = [];
  let index = 0;
  while (index < array.length) {
    if (index < count) {
      newArray.push(array[index]);
    }
    index++;
  }
  return newArray;
};
