import DataLoader from 'dataloader';
import { getN0deBy_id } from '../GoogleCloudPlatform/StorageAndDatabases/Datastore/N0de/Queries'; // eslint-disable-line camelcase

export default {
	n0deLoader: new DataLoader(_ids => Promise.all(_ids.map(_id => getN0deBy_id(_id)))),
};
