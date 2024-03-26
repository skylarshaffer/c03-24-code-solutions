interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: string;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

//  student
const student: StudentProps = {
  firstName: 'Skylar',
  lastName: 'Shaffer',
  age: 24,
};

const fullName: string = student.firstName + ' ' + student.lastName;

console.log('fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'IT';
console.log(`student['livesInIrvine']:`, student.livesInIrvine);
console.log(`student['previousOccupation']:`, student.previousOccupation);

//  vehicle
const vehicle: Vehicle = {
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
const pet: Pet = {
  name: 'Kory',
  kind: 'Dog',
};

delete pet.name;
delete pet['kind'];

console.log('pet:', pet);
console.log('typeof pet:', typeof pet);
