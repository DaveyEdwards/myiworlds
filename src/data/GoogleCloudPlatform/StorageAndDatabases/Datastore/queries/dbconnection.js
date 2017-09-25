import { datastore } from 'google-cloud';
import GCPConfig from '../../../config/settings';

const datastoreClient = datastore({
  projectId: GCPConfig.project_id,
  keyFilename: GCPConfig.datastore.gcpDatastoreOwnerServiceKeyPath,
});

export default datastoreClient;
