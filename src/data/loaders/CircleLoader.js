import DataLoader from 'dataloader';
import { getCircleBy_id } from '../GoogleCloudPlatform/StorageAndDatabases/Datastore/Circle/Queries'; // eslint-disable-line camelcase

export default {
  circleLoader: new DataLoader(_ids => Promise.all(_ids.map(_id => getCircleBy_id(_id)))),
};
