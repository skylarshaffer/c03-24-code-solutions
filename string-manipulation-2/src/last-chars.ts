/* exported lastChars */
const lastChars = (length: number, string: string): string => {
  let newString = string;
  if (string.length > length) {
    newString = string.slice(string.length - length);
  }
  return newString;
};
