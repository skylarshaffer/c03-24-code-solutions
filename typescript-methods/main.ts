//  Array methods
//  Create heroes array
const heroes = ['Iron Man', 'Mesmer', 'Spiderman', 'Doctor Strange'];

let randomNumber = Math.random();

randomNumber = heroes.length * randomNumber;

const randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

//  Create library with three books
const library = [
  {
    title: 'Tying Shoes for Beginners',
    author: 'Lou Ferrigno',
  },
  {
    title: 'Tying Shoes for Experts',
    author: 'Lou Ferrigno',
  },
  {
    title:
      'Writing a Book on Tying Shoes for Beginners and Experts for Beginners',
    author: 'Lou Ferrigno',
  },
];

const lastBook = library.pop();

console.log('lastBook:', lastBook);

const firstBook = library.shift();

console.log('firstBook:', firstBook);

//  Add two books
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

//  String methods
const fullName = 'Skylar Shaffer';
const firstAndLastName = fullName.split(' ');
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);

//  Object methods
const employee = {
  name: 'Chile DeLaborer',
  age: 9,
  position: 'Coal Minor',
};

const employeeKeys = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employeePairs:', employeePairs);
