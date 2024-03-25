const number1 = 7;
const number2 = 56;
const product = number1 + number2;
console.log('value of product:', product);
console.log('type of product:', typeof product);

const charge = 1.0;
const payment = 0.93;
const amountRemaining = (charge - payment).toFixed(2);
console.log('value of amountRemaining:', amountRemaining);
console.log('type of amountRemaining:', typeof amountRemaining);

const tests = 45;
const assignments = 90;
const final = 85;
const grade = (tests + assignments + final) / 3;
console.log('value of grade:', grade);
console.log('type of grade:', typeof grade);

const firstName = 'Skylar';
const lastName = 'Shaffer';
const fullName = firstName + ' ' + lastName;
console.log('value of fullName:', fullName);
console.log('type of fullName:', typeof fullName);

const pH = 3;
const isAcidic = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('type of isAcidic:', typeof isAcidic);

const numberOfSoldiers = 50;
const isSparta = numberOfSoldiers === 300;
console.log('value of isSparta:', isSparta);
console.log('type of isSparta:', typeof isSparta);

let nickname = fullName;
nickname += ' is the GOAT';
console.log('value of nickname:', nickname);
console.log('type of nickname:', typeof nickname);
