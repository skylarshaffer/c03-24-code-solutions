'use strict';
const bookArray = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];
console.log('bookArray:', bookArray);
console.log('typeof bookArray:', typeof bookArray);
console.log('JSON.stringify(bookArray):', JSON.stringify(bookArray));
const studentJSON = `{
  "id": 185712,
  "name": "Jane Doe"
}`;
console.log('studentJSON:', studentJSON);
console.log('typeof studentJSON:', typeof studentJSON);
console.log('JSON.stringify(studentJSON):', JSON.parse(studentJSON));
