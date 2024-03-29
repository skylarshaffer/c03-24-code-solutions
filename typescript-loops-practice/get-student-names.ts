/* exported getStudentNames */
function getStudentNames(students: Record<string, string>[]): string[] {
  const newArray: string[] = [];
  let i: number = 0;
  while (i < students.length) {
    newArray.push(students[i].name);
    i++;
  }
  return newArray;
}
