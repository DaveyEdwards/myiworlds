import DataLoader from 'dataloader';
import getEntitiesByKeys from '../GoogleCloudPlatform/StorageAndDatabases/Datastore/getEntitiesByKeys';

const userId = 'viewer000000000000000000000000000001';

export default {
  pageLoader: new DataLoader(keys => getEntitiesByKeys('Circle', keys, userId)),
};

// function pageLoader(authToken) {
//   return {
//     users: new DataLoader(ids => genUsers(authToken, ids)),
//   };
// }

// export default pageLoader;
