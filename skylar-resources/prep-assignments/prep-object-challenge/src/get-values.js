/* exported getValues */
function getValues(object) {
  let newArray = [];
  for (const value in object) {
    newArray.push(object[value]);
  }
  return newArray;
}
