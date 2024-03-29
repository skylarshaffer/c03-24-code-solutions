/* exported truncate */
const truncate = (length: number, string: string): string => {
  let newString = '';
  let i = 0;
  while (i + 1 <= length && i <= string.length - 1) {
    newString += string[i];
    i++;
  }
  return newString + '...';
};
