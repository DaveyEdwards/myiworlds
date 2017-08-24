import DataLoader from 'dataloader';
import { getViewerBy_id } from '../GoogleCloudPlatform/StorageAndDatabases/Datastore/Viewer/Queries'; // eslint-disable-line camelcase

export default {
	viewerLoader: new DataLoader(_ids => Promise.all(_ids.map(_id => getViewerBy_id(_id)))),
};
