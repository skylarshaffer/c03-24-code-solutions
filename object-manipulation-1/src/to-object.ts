/* exported toObject */
function toObject(keyValuePair: [string, unknown]): object {
  const newObject = {
    [keyValuePair[0]]: keyValuePair[1],
  };
  return newObject;
}
