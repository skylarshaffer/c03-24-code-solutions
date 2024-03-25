function whileLoop1() {
  let newArray = [];
  let index = 0;
  while (index < 10) {
    index++;
    newArray.push(index - 1);
  }
  return newArray;
}

const whileLoop1Result = whileLoop1();

console.log('whileLoop1 exercise:', whileLoop1Result);

function whileLoop2() {
  let newArray = [];
  let index = 0;
  while (index < 10) {
    index++;
    newArray.push((index - 1) * 2);
  }
  return newArray;
}

const whileLoop2Result = whileLoop2();

console.log('whileLoop2 exercise:', whileLoop2Result);

function forLoop1() {
  let newArray = [];
  let index = 0;
  for (let index = 0; index < 10; index++) {
    newArray.push(index);
  }
  return newArray;
}

const forLoop1Result = forLoop1();

console.log('forLoop1 exercise:', forLoop1Result);

function forLoop2() {
  let newArray = [];
  for (let index = 100; index > 0; index--) {
    console.log('Time to explosion:', index);
    newArray.push(index);
  }
}

forLoop2();

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  let newArray = [];
  for (const value in object) {
    newArray.push(value);
  }
  return newArray;
}

const forInLoop1Result = forInLoop1(person);

console.log('forInLoop1 exercise:', forInLoop1Result);

function forInLoop2(object) {
  let newArray = [];
  for (const key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}

const forInLoop2Result = forInLoop2(person);

console.log('forInLoop2 exercise:', forInLoop2Result);
