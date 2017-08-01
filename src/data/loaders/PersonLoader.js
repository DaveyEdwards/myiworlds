import DataLoader from 'dataloader';
import { getPersonBy_id } from '../GoogleCloudPlatform/StorageAndDatabases/Datastore/Person/Queries'; // eslint-disable-line camelcase

export default {
	personLoader: new DataLoader(_ids => Promise.all(_ids.map(_id => getPersonBy_id(_id)))),
};
