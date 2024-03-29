/* exported filterOutNulls */
function filterOutNulls(values: unknown[]): unknown[] {
  const newArray = [];
  let i: number = 0;
  while (i < values.length) {
    if (values[i] != null) {
      newArray.push(values[i]);
    }
    i++;
  }
  return newArray;
}
