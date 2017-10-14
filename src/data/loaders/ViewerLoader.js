import DataLoader from 'dataloader';
import { getEntityByKey } from '../GoogleCloudPlatform/StorageAndDatabases/Datastore'; // eslint-disable-line camelcase

export default {
  viewerLoader: new DataLoader(_ids => Promise.all(_ids.map(_id => getEntityByKey(_id)))),
};
