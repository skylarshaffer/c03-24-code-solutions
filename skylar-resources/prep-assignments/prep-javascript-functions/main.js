function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const addTwoNumbersResult = addTwoNumbers(2, 72);

console.log('addTwoNumbers exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const convertHoursToMinutesResult = convertHoursToMinutes(6);

console.log('convertHoursToMinutes exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

const getGreetingResult = getGreeting('World');

console.log('getGreeting exercise:', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const addAndMultiplyBy5Result = addAndMultiplyBy5(4, 10);

console.log('addAndMultiplyBy5 exercise:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const multiplyAndDivideBy5Result = multiplyAndDivideBy5(4, 10);

console.log('multiplyAndDivideBy5 exercise:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const subtractTwoNumbersResult = subtractTwoNumbers(11, 1);

console.log('subtractTwoNumbers exercise:', subtractTwoNumbersResult);

// This looks like I got it from cheating but I googled 'JavaScript Pi' to find the Math object. Promise!
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

const getCircleCircumferenceResult = getCircleCircumference(10);

console.log('getCircleCircumference result:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const getFullNameResult = getFullName('Skylar', 'Shaffer');

console.log('getFullName result:', getFullNameResult);

function cube(number) {
  return number * number * number;
}

const cubeResult = cube(6);

console.log('cube result:', cubeResult);
