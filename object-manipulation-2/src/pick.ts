/* exported pick */
function pick(
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> {
  const newObject: Record<string, unknown> = {};
  for (const key in keys) {
    if (source[keys[key]] !== undefined) {
      newObject[keys[key]] = source[keys[key]];
    }
  }
  return newObject;
}
