'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
//  isUnderFive
const isUnderFive = (number) => number < 5;
console.log('isUnderFive(5) result:', isUnderFive(5));
console.log('isUnderFive(2) result:', isUnderFive(2));
console.log('isUnderFive(7) result:', isUnderFive(7));
//  isEven
const isEven = (number) => number % 2 === 0;
console.log('isEven(5) result:', isEven(5));
console.log('isEven(2) result:', isEven(2));
console.log('isEven(7) result:', isEven(7));
//  startsWithJ
const startsWithJ = (string) => string[0] === 'J';
console.log('startsWithJ(Kotlin) result:', startsWithJ('Kotlin'));
console.log('startsWithJ(C#) result:', startsWithJ('C#'));
console.log('startsWithJ(JavaScript) result:', startsWithJ('JavaScript'));
//  isOldEnoughToDrink
const isOldEnoughToDrink = (person) => person.age >= 21;
const bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10,
};
console.log('isOldEnoughToDrink(bart) result:', isOldEnoughToDrink(bart));
//  isOldEnoughToDrive
const isOldEnoughToDrive = (person) => person.age >= 16;
const homer = {
  name: 'Homer Jay Simpson',
  age: 39,
};
console.log('isOldEnoughToDrive(homer) result:', isOldEnoughToDrive(homer));
//  isOldEnoughToDrinkAndDrive
const isOldEnoughToDrinkAndDrive = (person) => isNaN(person.age);
console.log(
  'isOldEnoughToDrinkAndDrive(bart) result:',
  isOldEnoughToDrinkAndDrive(bart)
);
console.log(
  'isOldEnoughToDrinkAndDrive(homer) result:',
  isOldEnoughToDrinkAndDrive(homer)
);
//  categorizeAcidity
function categorizeAcidity(pH) {
  let acidity = '';
  if (pH > 0 && pH < 7) {
    acidity = 'acid';
  } else if (pH > 7 && pH < 14) {
    acidity = 'base';
  } else if (pH === 7) {
    acidity = 'neutral';
  } else {
    acidity = 'invalid pH level';
  }
  return acidity;
}
console.log('categorizeAcidity(-1) result:', categorizeAcidity(-1));
console.log(
  'categorizeAcidity(14.0000001) result:',
  categorizeAcidity(14.0000001)
);
console.log('categorizeAcidity(7) result:', categorizeAcidity(7));
console.log('categorizeAcidity(2) result:', categorizeAcidity(2));
console.log('categorizeAcidity(9) result:', categorizeAcidity(9));
//  introduceWarnerBro
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return `We're the warner brothers!`;
    case 'wakko':
      return `We're the warner brothers!`;
    case 'dot':
      return `I'm cute~`;
    default:
      return 'Goodnight everybody!';
  }
}
console.log(`introduceWarnerBro('yakko') result:`, introduceWarnerBro('yakko'));
console.log(`introduceWarnerBro('wakko') result:`, introduceWarnerBro('wakko'));
console.log(`introduceWarnerBro('dot') result:`, introduceWarnerBro('dot'));
console.log(`introduceWarnerBro('cody') result:`, introduceWarnerBro('cody'));
console.log(
  `introduceWarnerBro('minerva') result:`,
  introduceWarnerBro('minerva')
);
//  recommendMovie
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'The Bourne Identity';
    case 'comedy':
      return 'Superbad';
    case 'horror':
      return 'The Green Room';
    case 'drama':
      return 'Fateful Findings';
    case 'musical':
      return 'Welcome to Mountport';
    case 'sci-fi':
      return 'Twisted Pair';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
console.log(`recommendMovie('action') result:`, recommendMovie('action'));
console.log(`recommendMovie('comedy') result:`, recommendMovie('comedy'));
console.log(`recommendMovie('random') result:`, recommendMovie('random'));
