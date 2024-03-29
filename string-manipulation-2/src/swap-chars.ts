/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  const newArray: string[] = Array.from(string);
  newArray.splice(firstIndex, 1, string[secondIndex]);
  newArray.splice(secondIndex, 1, string[firstIndex]);
  return newArray.join('');
}
