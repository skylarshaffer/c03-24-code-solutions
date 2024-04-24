import { takeAChance } from './take-a-chance.js';

takeAChance('Skylar Shaffer')
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
