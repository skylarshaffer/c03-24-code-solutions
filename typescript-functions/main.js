'use strict';
//  minutesToSeconds
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(6);
console.log('convertMinutesToSeconds exercise:', convertMinutesToSecondsResult);
//  greet
function greet(name) {
  return 'Hey ' + name + '!';
}
const greetResult = greet('Skylar');
console.log('greet exercise:', greetResult);
//  getArea
const getArea = (width, height) => width * height;
const getAreaResult = getArea(50, 30);
console.log('getArea exercise:', getAreaResult);
//  getFirstName
const getFirstName = (person) => person.firstName;
const getFirstNameResult = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});
console.log('getFirstName exercise:', getFirstNameResult);
//  getLastElement
const getLastElement = (array) => array[array.length - 1];
const getLastElementResult = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
  true,
  'last',
]);
console.log('getLastElement exercise:', getLastElementResult);
//  callOtherFunction
const callOtherFunction = (otherFunction, params) => otherFunction(params);
const callOtherFunctionResult = callOtherFunction(convertMinutesToSeconds, 16);
console.log(
  'callOtherFunction (calling convertMinutesToSeconds) exercise:',
  callOtherFunctionResult
);
