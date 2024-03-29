/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
  const newArray = [];
  let i = 0;
  while (i < numbers.length) {
    //  if array of even single digits contains the last character of the number converted to a string
    if (
      ['2', '4', '6', '8', '0'].includes(
        numbers[i].toString()[numbers[i].toString().length - 1]
      )
    ) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
    i++;
  }
  return newArray;
}
