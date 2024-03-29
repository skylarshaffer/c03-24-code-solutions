/* exported getKeys */
function getKeys(object: Record<string, unknown>): unknown[] {
  const newArray: unknown[] = [];
  for (const value in object) {
    newArray.push(value);
  }
  return newArray;
}
