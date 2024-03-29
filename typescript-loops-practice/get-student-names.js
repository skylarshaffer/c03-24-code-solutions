'use strict';
/* exported getStudentNames */
function getStudentNames(students) {
  const newArray = [];
  let i = 0;
  while (i < students.length) {
    newArray.push(students[i].name);
    i++;
  }
  return newArray;
}
