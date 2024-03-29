/* exported firstChars */
const firstChars = (length: number, string: string): string => {
  let newString = '';
  let i = 0;
  while (i < string.length) {
    if (i < length) {
      newString += string[i];
    }
    i++;
  }
  return newString;
};
