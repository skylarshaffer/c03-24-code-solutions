/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

//  while loops
//  getNumbersToTen
function getNumbersToTen(): object {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber - 1);
    currentNumber++;
  }
  return numbers;
}

const getNumbersToTenResult = getNumbersToTen();

console.log('getNumbersToTen() result:', getNumbersToTenResult);

//  getEvenNumbersToTwenty
function getEvenNumbersToTwenty(): object {
  const numbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    numbers.push(currentNumber);
    currentNumber += 2;
  }
  return numbers;
}

const getEvenNumbersToTwentyResult = getEvenNumbersToTwenty();

console.log('getEvenNumbersToTwenty() result:', getEvenNumbersToTwentyResult);

//  repeatWord
function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';
  while (count < times + 1) {
    repeated += word;
    count++;
  }
  return repeated;
}

const repeatWordResult = repeatWord('stopHittingYourself', 6);

console.log(`repeatWord('stopHittingYourself', 6) result:`, repeatWordResult);

//  for loops
//  logEachCharacter

function logEachCharacter(str: string): void {
  for (let i = 0; i < str.length; i++) {
    console.log(`value of ${str}[${i}]:`, str[i]);
  }
}

logEachCharacter('stopHittingYourself');

//  doubleAll

function doubleAll(numbers: any): object {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

const doubleAllResult = doubleAll([1, 2, 3, 8, 0, 3, 77]);

console.log(`doubleAll([1, 2, 3, 8, 0, 3, 77]) result:`, doubleAllResult);

//  for in loops
//  getKeys

function getKeys(obj: Record<string, unknown>): object {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}

const getKeysResult = getKeys({ fullName: 'Skylar Shaffer', age: 24 });

console.log(
  `getKeys({fullName: 'Skylar Shaffer', age: 24}) result:`,
  getKeysResult
);

//  getValues

function getValues(obj: Record<string, unknown>): object {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}

const getValuesResult = getValues({ fullName: 'Skylar Shaffer', age: 24 });

console.log(
  `getValues({fullName: 'Skylar Shaffer', age: 24}) result:`,
  getValuesResult
);
