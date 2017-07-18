import { createPerson } from '../queries/gcpDatastore/personQueries';

export async function generatePersons() {
  persons.map((person) => {
    createPerson(person);
    console.log('\n', '__PERSON__', '\n', person);
  });
}

const persons = [
  {
    _id: 'person000000000000000000000000000001',
    username: 'MyiWorlds',
    email: 'myiworlds@myiworlds.com',
  },
  {
    _id: 'person000000000000000000000000000002',
    username: 'DaveyEdwards',
    email: 'davey@hotmale.com',
  },
];
