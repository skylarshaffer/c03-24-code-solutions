/* exported omit */
function omit(
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> {
  const newObject: Record<string, unknown> = {};
  for (const key in source) {
    if (!keys.includes(key)) newObject[key] = source[key];
  }
  return newObject;
}
