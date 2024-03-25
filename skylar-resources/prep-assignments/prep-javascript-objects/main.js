const person = {
  firstName: 'Cassidy',
  lastName: 'Medina',
  hobby: 'Anime',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Retail Associate';

console.log("The person's current job is:", person.job);

person['previousJob'] = 'Receptionist';

console.log("The person's previous job is:", person.previousJob);

console.log(person);
