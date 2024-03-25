'use strict';
//  area
const width = 30;
const height = 10;
let area = width * height;
console.log('area: ' + area + '\n' + 'typeof area: ' + typeof area);
//  change
const bill = 40;
const payment = 50;
let change = payment - bill;
console.log('change: ' + change + '\n' + 'typeof change: ' + typeof change);
//  grade
const quizzes = 70;
const midterm = 50;
const final = 100;
let grade = (quizzes + midterm + final) / 3;
console.log('grade: ' + grade + '\n' + 'typeof grade: ' + typeof grade);
//  fullName
const firstName = 'Skylar';
const lastName = 'Shaffer';
let fullName = firstName + ' ' + lastName;
console.log(
  'fullName: ' + fullName + '\n' + 'typeof fullName: ' + typeof fullName
);
//  isAcidic
const pH = 10;
let isAcidic = pH < 7;
console.log(
  'isAcidic: ' + isAcidic + '\n' + 'typeof isAcidic: ' + typeof isAcidic
);
//  isSparta
const headCount = 505;
let isSparta = headCount === 300;
console.log(
  'isSparta: ' + isSparta + '\n' + 'typeof isSparta: ' + typeof isSparta
);
// motto
let motto = fullName;
motto += ' is the GOAT';
console.log('motto: ' + motto + '\n' + 'typeof motto: ' + typeof motto);
