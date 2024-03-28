//  minutesToSeconds
function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

const convertMinutesToSecondsResult: number = convertMinutesToSeconds(6);

console.log('convertMinutesToSeconds exercise:', convertMinutesToSecondsResult);

//  greet
function greet(name: string): string {
  return 'Hey ' + name + '!';
}

const greetResult: string = greet('Skylar');

console.log('greet exercise:', greetResult);

//  getArea
const getArea = (width: number, height: number): number => width * height;

const getAreaResult: number = getArea(50, 30);

console.log('getArea exercise:', getAreaResult);

//  getFirstName
const getFirstName = (person: any): string => person.firstName;

const getFirstNameResult: string = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge',
});

console.log('getFirstName exercise:', getFirstNameResult);

//  getLastElement
const getLastElement = (array: any): unknown => array[array.length - 1];

const getLastElementResult: unknown = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
  true,
  'last',
]);

console.log('getLastElement exercise:', getLastElementResult);

//  callOtherFunction
const callOtherFunction = (otherFunction: Function, params: unknown): unknown =>
  otherFunction(params);

const callOtherFunctionResult: unknown = callOtherFunction(
  convertMinutesToSeconds,
  16
);

console.log(
  'callOtherFunction (calling convertMinutesToSeconds) exercise:',
  callOtherFunctionResult
);
