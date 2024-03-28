/* exported getInitialsOfPerson */
//  getInitialsOfPerson
const getInitialsOfPerson: unknown = (person: any): string =>
  `${person.firstName[0]}${person.lastName[0]}`;
