/* exported isVowel */
function isVowel(char: string): boolean {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  if (vowels.includes(char.toLowerCase())) {
    return true;
  }
  return false;
}
