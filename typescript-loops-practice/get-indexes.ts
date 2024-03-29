/* exported getIndexes */
function getIndexes(array: number[]): number[] {
  const indexes: number[] = [];
  let i: number = 0;
  while (i < array.length) {
    indexes.push(i);
    i++;
  }
  return indexes;
}
