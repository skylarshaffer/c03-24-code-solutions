//  area
const width: number = 30;
const height: number = 10;
const area: number = width * height;

console.log('area: ' + area + '\n' + 'typeof area: ' + typeof area);

//  change
const bill: number = 40;
const payment: number = 50;
const change: number = payment - bill;

console.log('change: ' + change + '\n' + 'typeof change: ' + typeof change);

//  grade
const quizzes: number = 70;
const midterm: number = 50;
const final: number = 100;
const grade: number = (quizzes + midterm + final) / 3;

console.log('grade: ' + grade + '\n' + 'typeof grade: ' + typeof grade);

//  fullName

const firstName: string = 'Skylar';
const lastName: string = 'Shaffer';
const fullName: string = firstName + ' ' + lastName;

console.log(
  'fullName: ' + fullName + '\n' + 'typeof fullName: ' + typeof fullName
);

//  isAcidic

const pH: number = 10;
const isAcidic: boolean = pH < 7;

console.log(
  'isAcidic: ' + isAcidic + '\n' + 'typeof isAcidic: ' + typeof isAcidic
);

//  isSparta

const headCount: number = 505;
const isSparta: boolean = headCount === 300;

console.log(
  'isSparta: ' + isSparta + '\n' + 'typeof isSparta: ' + typeof isSparta
);

// motto

let motto: string = fullName;
motto += ' is the GOAT';

console.log('motto: ' + motto + '\n' + 'typeof motto: ' + typeof motto);
