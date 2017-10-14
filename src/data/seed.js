// import gstore from 'gstore-node';
// import GCPConfig from './GoogleCloudPlatform/config/settings';
// import { generateCircles } from './GoogleCloudPlatform/StorageAndDatabases/Datastore/Circle/circleSeed';
// import { generateViewers } from './GoogleCloudPlatform/StorageAndDatabases/Datastore/Viewer/viewerSeed';

// generateCircles();
// generateViewers();

// import getEntityByIndexedValue from './GoogleCloudPlatform/StorageAndDatabases/Datastore/queries/getEntityByIndexedValue';
// import createEntity from './GoogleCloudPlatform/StorageAndDatabases/Datastore/queries/createEntity';
// import getEntityByKey from './GoogleCloudPlatform/StorageAndDatabases/Datastore/queries/getEntityByKey';
// import getEntitiesByKeys from './GoogleCloudPlatform/StorageAndDatabases/Datastore/queries/getEntitiesByKeys';
// import createEntities from './GoogleCloudPlatform/StorageAndDatabases/Datastore/queries/createEntities';
import getEntities from './GoogleCloudPlatform/StorageAndDatabases/Datastore/getEntities';
// import updateEntity from './GoogleCloudPlatform/StorageAndDatabases/Datastore/queries/updateEntity';
// import deleteEntity from './GoogleCloudPlatform/StorageAndDatabases/Datastore/queries/deleteEntity';

// GET QUERY WORKING FOR LAST UPDATED
getEntities('Page-clones', [
  {
    property: 'Page_id',
    condition: '=',
    value: '290257d0-ad39-11e7-84ec-67a70a1fc14b',
  },
  {
    property: 'dateUpdated',
    condition: '<',
    value: '2000-12-31T23:59:59.000Z',
  },
],
200,
null,
'viewer000000000000000000000000000001',
).then(response => console.log('response', response));

// createEntity([
//   {
//     name: '_id',
//     value: 'ca8b1840-a0a9-11e7-9aad-e94a13ec9ee1',
//   },
//   {
//     name: 'kind',
//     value: 'Page',
//     excludeFromIndexes: true,
//   },
//   {
//     name: 'slug',
//     value: 'OVERRIDDEN',
//   },
//   {
//     name: 'slugName',
//     value: '',
//   },
//   {
//     name: 'title',
//     value: 'ZZZZZZZZZZZZZ',
//   },
//   {
//     name: 'dateCreated',
//     value: new Date(),
//   },
//   {
//     name: 'lastUpdated',
//     value: new Date(),
//   },
//   {
//     name: 'creator',
//     value: 'viewer000000000000000000000000000001',
//   },
//   {
//     name: 'viewers',
//     value: [],
//   },
//   {
//     name: 'editors',
//     value: [],
//   },
//   {
//     name: 'string',
//     value: 'A long string goes here',
//     excludeFromIndexes: true,
//   },
//   {
//     name: 'circles',
//     value: ['1', '2', '3', '4'],
//     excludeFromIndexes: true,
//   },
// ]);

// updateEntity(
//   [
//     {
//       name: 'kind',
//       value: 'Page',
//       excludeFromIndexes: true,
//     },
//     {
//       name: '_id',
//       value: '12c4d890-a324-11e7-b81b-fd54dc129351',
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

// deleteEntity(
//   'Page',
//   'ca8b1840-a0a9-11e7-9aad-e94a13ec9ee1',
//   'viewer000000000000000000000000000001',
// );

// getEntityByKey(
//   'Page',
//   '9da9fd50-a0a9-11e7-8947-0b9f2d00779a',
//   'viewer000000000000000000000000000001',
// );

// getEntityByIndexedValue('Page', 'title', 'myiworlds/that-title-was-gettin123');
// getEntitiesByKeys(
//   'Page',
//   [
//     '0518f530-a312-11e7-a327-ada73760e35b',
//     '12c4d890-a324-11e7-b81b-fd54dc129351',
//     '12c4d891-a324-11e7-b81b-fd54dc129351',
//     '12c4d892-a324-11e7-b81b-fd54dc129351',
//     '12c4d893-a324-11e7-b81b-fd54dc129351',
//     '12c4d894-a324-11e7-b81b-fd54dc129351',
//     '25f18302-a180-11e7-abef-79dd1bec1d5e',
//   ],
//   'viewer000000000000000000000000000004',
// );

// getEntities(
//   'Page',
//   [
//     {
//       property: 'slug',
//       condition: '=',
//       value: 'A_unique_slug',
//     },
//   ],
//   7,
//   null,
//   'viewer000000000000000000000000000008',
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
//       value: 'TESTTTTZ123ZZ',
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
//       value: 'fv2d9371-a17f-11e7-99cd-fde70085987e',
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
