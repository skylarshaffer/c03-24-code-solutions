console.log('hello, world');

const $h1 = document.querySelector('h1');
console.log('<h1>', $h1);
console.dir($h1);

const $idExplanation = document.getElementById('explanation');
console.log('#explanation', $idExplanation);
console.dir($idExplanation);

const $classHint = document.querySelector('.hint');
console.log('.hint', $classHint);
console.dir($classHint);

const $p = document.querySelectorAll('p');
console.log('<p>', $p);

const $classExampleLink = document.querySelectorAll('.example-link');
console.log('.example-link', $classExampleLink);
