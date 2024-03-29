/* exported ransomCase */
const ransomCase = (string: string): string => {
  let newString = '';
  let i = 0;
  while (i < string.length) {
    if (i % 2 !== 0) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
    i++;
  }
  return newString;
};
