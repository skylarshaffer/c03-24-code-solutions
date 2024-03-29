/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const newArray: string[] = [];
  for (const key in words) {
    newArray.push(words[key] + suffix);
  }
  return newArray;
}
