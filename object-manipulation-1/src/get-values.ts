/* exported getValues */
function getValues(object: Record<string, unknown>): unknown[] {
  const newArray: unknown[] = [];
  for (const key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}
