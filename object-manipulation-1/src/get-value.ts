/* exported getValue */
function getValue(object: Record<string, unknown>, key: string): unknown {
  return object[key];
}
