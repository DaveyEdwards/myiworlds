// import gstore from 'gstore-node';
// import GCPConfig from './GoogleCloudPlatform/config/settings';
// import { generateCircles } from './GoogleCloudPlatform/StorageAndDatabases/Datastore/Circle/circleSeed';
// import { generateViewers } from './GoogleCloudPlatform/StorageAndDatabases/Datastore/Viewer/viewerSeed';

// // Connect the application to Google Datastore
// // This shouldn't have to be here and should be able to be in a file the server calls.
// const datastore = require('@google-cloud/datastore')({
//   projectId: GCPConfig.project_id,
//   keyFilename: GCPConfig.datastore.gcpDatastoreOwnerServiceKeyPath,
// });

// gstore.connect(datastore);

// generateCircles();
// generateViewers();

import createEntity from './GoogleCloudPlatform/StorageAndDatabases/Datastore/queries/createEntity';
import getEntityBy_id from './GoogleCloudPlatform/StorageAndDatabases/Datastore/queries/getEntityBy_id';
import getEntityByIndexedValue from './GoogleCloudPlatform/StorageAndDatabases/Datastore/queries/getEntityByIndexedValue';
import getEntitiesByKey from './GoogleCloudPlatform/StorageAndDatabases/Datastore/queries/getEntitiesByKey';
import createEntities from './GoogleCloudPlatform/StorageAndDatabases/Datastore/queries/createEntities';
import getEntities from './GoogleCloudPlatform/StorageAndDatabases/Datastore/queries/getEntities';
import updateEntity from './GoogleCloudPlatform/StorageAndDatabases/Datastore/queries/updateEntity';
import deleteEntity from './GoogleCloudPlatform/StorageAndDatabases/Datastore/queries/deleteEntity';
import cloneEntity from './GoogleCloudPlatform/StorageAndDatabases/Datastore/queries/cloneEntity';

createEntity([
  {
    name: '_id',
    value: 'ca8b1840-a0a9-11e7-9aad-e94a13ec9ee1',
  },
  {
    name: 'kind',
    value: 'Page',
    excludeFromIndexes: true,
  },
  {
    name: 'slug',
    value: 'OVERRIDDEN',
  },
  {
    name: 'slugName',
    value: '',
  },
  {
    name: 'title',
    value: 'ZZZZZZZZZZZZZ',
  },
  {
    name: 'dateCreated',
    value: new Date(),
  },
  {
    name: 'lastUpdated',
    value: new Date(),
  },
  {
    name: 'creator',
    value: 'viewer000000000000000000000000000001',
  },
  {
    name: 'viewers',
    value: [],
  },
  {
    name: 'editors',
    value: [],
  },
  {
    name: 'string',
    value: 'A long string goes here',
    excludeFromIndexes: true,
  },
  {
    name: 'circles',
    value: ['1', '2', '3', '4'],
    excludeFromIndexes: true,
  },
]);

// updateEntity(
//   [
//     {
//       name: 'kind',
//       value: 'Page',
//       excludeFromIndexes: true,
//     },
//     {
//       name: '_id',
//       value: 'test',
//     },
//     {
//       name: 'creator',
//       value: 'viewer000000000000000000000000000001',
//     },
//     {
//       name: 'slug',
//       value: 'myiworlds/updatedslug',
//     },
//     {
//       name: 'slugName',
//       value: 'updatedslug',
//     },
//     {
//       name: 'editors',
//       value: [
//         'viewer000000000000000000000000000001',
//         'viewer000000000000000000000000000002',
//         'viewer000000000000000000000000000003',
//       ],
//       excludeFromIndexes: true,
//     },
//     {
//       name: 'title',
//       value: 'test11',
//     },
//     {
//       name: 'lastUpdated',
//       value: new Date(),
//     },
//     {
//       name: 'circles',
//       value: ['1', '2', '3', '5'],
//       excludeFromIndexes: true,
//     },
//   ],
//   'viewer000000000000000000000000000001',
// );

deleteEntity(
  'Page',
  'ca8b1840-a0a9-11e7-9aad-e94a13ec9ee1',
  'viewer000000000000000000000000000001',
);

// cloneEntity(
//   [
//     {
//       name: 'kind',
//       value: 'Page',
//       excludeFromIndexes: true,
//     },
// {
//   name: 'public',
//   value: true,
// }
//     {
//       name: '_id',
//       value: '34985152-9e96-11e7-89a9-935348a58218',
//     },
//     {
//       name: 'slug',
//       value: 'myiworlds/new-slug777777777',
//     },
//     {
//       name: 'slugName',
//       value: 'new-slug1411',
//     },
//     {
//       name: 'editors',
//       value: [
//         'viewer000000000000000000000000000001',
//         'viewer000000000000000000000000000002',
//         'viewer000000000000000000000000000003',
//       ],
//       excludeFromIndexes: true,
//     },
//     {
//       name: 'title',
//       value: 'test11',
//     },
//     {
//       name: 'lastUpdated',
//       value: new Date(),
//     },
//     {
//       name: 'circles',
//       value: ['1', '2', '3', '5'],
//       excludeFromIndexes: true,
//     },
//   ],
//   'viewer000000000000000000000000000001',
// );

// getEntityBy_id(
//   'Page',
//   '9da9fd50-a0a9-11e7-8947-0b9f2d00779a',
//   'viewer000000000000000000000000000001',
// );

// getEntityByIndexedValue('Page', 'title', 'A title');
// getEntitiesByKey(
//   'Page',
//   [
//     '6e60c151-a180-11e7-bc16-43ed295aa29d',
//     '6e60e860-a180-11e7-bc16-43ed295aa29d',
//     '54d85902-a180-11e7-a4fc-8fa344df8293',
//     '4',
//     '5',
//     '6',
//     '10',
//     '11',
//     '12',
//   ],
//   'viewer000000000000000000000000000001',
// );
// getEntities(
//   'Page',
//   [
//     {
//       property: 'title',
//       condition: '=',
//       value: 'my Second title',
//     },
//     {
//       property: 'kind',
//       condition: '=',
//       value: 'Page',
//     },
//   ],
//   3,
//   null,
// );

// getEntities(
//   'Page',
//   [
//     {
//       property: 'tags',
//       condition: '=',
//       value: 'hello',
//     },
//   ],
//   20,
//   null,
// );

// createEntities([
//   [
//     {
//       name: 'kind',
//       value: 'human',
//       excludeFromIndexes: true,
//     },
//     {
//       name: 'lastUpdated',
//       value: new Date(),
//     },
//     {
//       name: 'firstName',
//       value: 'Davey',
//       excludeFromIndexes: true,
//     },
//     {
//       name: 'lastName',
//       value: 'Edwardsss',
//       excludeFromIndexes: true,
//     },
//     {
//       name: 'username',
//       value: 'daveysworld',
//     },
//     {
//       name: 'createdCircles',
//       value: [],
//       excludeFromIndexes: true,
//     },
//     {
//       name: 'canCreate',
//       value: true,
//       excludeFromIndexes: true,
//     },
//     {
//       name: '_id',
//       value: 'f62d9371-a17f-11e7-99cd-fde70085987e',
//     },
//   ],
//   [
//     {
//       name: 'kind',
//       value: 'Page',
//       excludeFromIndexes: true,
//     },
//     {
//       name: 'lastUpdated',
//       value: new Date(),
//     },
//     {
//       name: 'public',
//       value: true,
//     },
//     {
//       name: 'path',
//       value: 'path1110',
//     },
//     {
//       name: 'tags',
//       value: ['development', 'test', 'computer'],
//     },
//     {
//       name: '_id',
//       value: '',
//     },
//     {
//       name: 'creator',
//       value: 'viewer000000000000000000000000000001',
//     },
//     {
//       name: 'editors',
//       value: [
//         'viewer000000000000000000000000000001',
//         'viewer000000000000000000000000000002',
//         'viewer000000000000000000000000000003',
//       ],
//       excludeFromIndexes: true,
//     },
//     {
//       name: 'title',
//       value: 'my first title',
//     },
//     {
//       name: 'string',
//       value: 'A long string goes here',
//       excludeFromIndexes: true,
//     },
//   ],
//   [
//     {
//       name: 'kind',
//       value: 'Page',
//       excludeFromIndexes: true,
//     },
//     {
//       name: 'lastUpdated',
//       value: new Date(),
//     },
//     {
//       name: 'public',
//       value: true,
//     },
//     {
//       name: 'path',
//       value: 'path11',
//     },
//     {
//       name: 'tags',
//       value: ['web', 'development', 'computer'],
//     },
//     {
//       name: '_id',
//       value: '',
//     },
//     {
//       name: 'creator',
//       value: 'viewer000000000000000000000000000001',
//     },
//     {
//       name: 'editors',
//       value: [
//         'viewer000000000000000000000000000001',
//         'viewer000000000000000000000000000002',
//         'viewer000000000000000000000000000003',
//       ],
//       excludeFromIndexes: true,
//     },
//     {
//       name: 'title',
//       value: 'my Second title',
//     },
//     {
//       name: 'string',
//       value: 'A long string goes here',
//       excludeFromIndexes: true,
//     },
//   ],
//   [
//     {
//       name: 'kind',
//       value: 'Page',
//       excludeFromIndexes: true,
//     },
//     {
//       name: 'lastUpdated',
//       value: new Date(),
//     },
//     {
//       name: 'public',
//       value: false,
//     },
//     {
//       name: 'path',
//       value: 'path12',
//     },
//     {
//       name: 'tags',
//       value: ['web', 'test', 'computer'],
//     },
//     {
//       name: 'creator',
//       value: 'viewer000000000000000000000000000006',
//     },
//     {
//       name: 'editors',
//       value: [
//         'viewer000000000000000000000000000001',
//         'viewer000000000000000000000000000002',
//         'viewer000000000000000000000000000003',
//       ],
//       excludeFromIndexes: true,
//     },
//     {
//       name: '_id',
//       value: '',
//     },
//     {
//       name: 'title',
//       value: 'TEST',
//     },
//     {
//       name: 'string',
//       value: 'A long string goes here',
//       excludeFromIndexes: true,
//     },
//   ],
//   [
//     {
//       name: 'kind',
//       value: 'Page',
//       excludeFromIndexes: true,
//     },
//     {
//       name: 'lastUpdated',
//       value: new Date(),
//     },
//     {
//       name: 'public',
//       value: true,
//     },
//     {
//       name: 'path',
//       value: 'path13',
//     },
//     {
//       name: 'tags',
//       value: ['web', 'development', 'test'],
//     },
//     {
//       name: '_id',
//       value: '',
//     },
//     {
//       name: 'creator',
//       value: 'viewer000000000000000000000000000004',
//     },
//     {
//       name: 'editors',
//       value: [
//         'viewer000000000000000000000000000006',
//         'viewer000000000000000000000000000005',
//         'viewer000000000000000000000000000004',
//       ],
//       excludeFromIndexes: true,
//     },
//     {
//       name: 'title',
//       value: 'my Second title',
//     },
//     {
//       name: 'string',
//       value: 'A long string goes here',
//       excludeFromIndexes: true,
//     },
//   ],
//   [
//     {
//       name: 'kind',
//       value: 'Page',
//       excludeFromIndexes: true,
//     },
//     {
//       name: 'public',
//       value: true,
//     },
//     {
//       name: 'path',
//       value: 'path14',
//     },
//     {
//       name: 'creator',
//       value: 'viewer000000000000000000000000000005',
//     },
//     {
//       name: 'editors',
//       value: [
//         'viewer000000000000000000000000000004',
//         'viewer000000000000000000000000000005',
//         'viewer000000000000000000000000000006',
//       ],
//       excludeFromIndexes: true,
//     },
//     {
//       name: 'tags',
//       value: ['web', 'development', 'test', 'computer'],
//     },
//     {
//       name: '_id',
//       value: '',
//     },
//     {
//       name: 'title',
//       value: 'my first title',
//     },
//     {
//       name: 'string',
//       value: 'A long string goes here',
//       excludeFromIndexes: true,
//     },
//   ],
// ]);
