/* exported invert */

function invert(source: Record<string, any>): Record<string, string> {
  const newObject: Record<string, string> = {};
  for (const key in source) {
    const value: string = source[key].toString();
    newObject[value] = key;
  }
  return newObject;
}
