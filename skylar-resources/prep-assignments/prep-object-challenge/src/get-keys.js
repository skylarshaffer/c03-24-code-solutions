/* exported getKeys */
function getKeys(object) {
  let newArray = [];
  for (const value in object) {
    newArray.push(value);
  }
  return newArray;
}
