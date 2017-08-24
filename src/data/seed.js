import gstore from 'gstore-node';
import GCPConfig from './GoogleCloudPlatform/config/settings';
import { generateCircles } from './GoogleCloudPlatform/StorageAndDatabases/Datastore/Circle/circleSeed';
import { generateViewers } from './GoogleCloudPlatform/StorageAndDatabases/Datastore/Viewer/viewerSeed';

// Connect the application to Google Datastore
// This shouldn't have to be here and should be able to be in a file the server calls.
const datastore = require('@google-cloud/datastore')({
  projectId: GCPConfig.project_id,
  keyFilename: GCPConfig.datastore.gcpDatastoreOwnerServiceKeyPath,
});

gstore.connect(datastore);

generateCircles();
generateViewers();
