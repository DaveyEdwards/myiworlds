import GCPConfig from '../../config/settings';

const datastoreClient = require('@google-cloud/datastore')({
  projectId: GCPConfig.project_id,
  keyFilename: GCPConfig.datastore.gcpDatastoreOwnerServiceKeyPath,
});

export default datastoreClient;
