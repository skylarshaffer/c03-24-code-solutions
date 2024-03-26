'use strict';
//  student
const student = {
  firstName: 'Skylar',
  lastName: 'Shaffer',
  age: 24,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'IT';
console.log(`student['livesInIrvine']:`, student.livesInIrvine);
console.log(`student['previousOccupation']:`, student.previousOccupation);
//  vehicle
const vehicle = {
  make: 'Tesla',
  model: 'Accord',
  year: '2004',
};
vehicle['color'] = 'Silver';
vehicle['isConvertible'] = false;
console.log(`vehicle['color']:`, vehicle['color']);
console.log(`vehicle['isConvertible']:`, vehicle['isConvertible']);
console.log('vehicle:', vehicle);
console.log('typeof vehicle:', typeof vehicle);
//  pet
const pet = {
  name: 'Kory',
  kind: 'Dog',
};
delete pet.name;
delete pet['kind'];
console.log('pet:', pet);
console.log('typeof pet:', typeof pet);
