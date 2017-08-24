import { createViewer } from './Queries/';

const viewers = [
  {
    _id: 'viewer000000000000000000000000000001',
    username: 'MyiWorlds',
    email: 'myiworlds@myiworlds.com',
  },
  {
    _id: 'viewer000000000000000000000000000002',
    username: 'DaveyEdwards',
    email: 'davey@hotmale.com',
  },
];

// TODO: Make export Default
export async function generateViewers() {
  viewers.map(
    viewer => createViewer(viewer).then(console.log('\n', '__VIEWER__', '\n', '\n', viewer)), // eslint-disable-line no-console,
  );
}
