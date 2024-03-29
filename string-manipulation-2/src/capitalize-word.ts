/* exported capitalizeWord */
const capitalizeWord = (word: string): string => {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    let newString = '';
    newString = word[0].toUpperCase();
    newString += word.slice(1).toLowerCase();
    return newString;
  }
};
