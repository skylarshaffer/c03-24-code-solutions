/* exported includesSeven */
function includesSeven(array: number[]): boolean {
  let i = 0;
  let isIncludesSeven = false;
  while (i < array.length) {
    if (array[i] === 7) {
      isIncludesSeven = true;
    }
    i++;
  }
  return isIncludesSeven;
}
