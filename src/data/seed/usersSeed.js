import { createUser } from '../queries/googleDatastore/userQueries';

export async function generateUsers() {
  users.map((user) => {
    createUser(user);
    console.log('\n', '__USER__',  '\n',  user );
  })
}

const users = [
  {
    _id: 'user00000000000000000000000000000001',
    username: 'MyiWorlds',
    email: 'myiworlds@myiworlds.com',
  }, {
    _id: 'user00000000000000000000000000000002',
    username: 'DaveyEdwards',
    email: 'davey@hotmale.com',
  },
];
