import gstore from 'gstore-node';
import GCPConfig from './GoogleCloudPlatform/config/settings';
import { generateN0des } from './GoogleCloudPlatform/StorageAndDatabases/Datastore/N0de/n0deSeed';
import { generatePersons } from './GoogleCloudPlatform/StorageAndDatabases/Datastore/Person/personSeed';

// Connect the application to Google Datastore
// This shouldn't have to be here and should be able to be in a file the server calls.
const datastore = require('@google-cloud/datastore')({
	projectId: GCPConfig.project_id,
	keyFilename: GCPConfig.datastore.gcpDatastoreOwnerServiceKeyPath,
});

gstore.connect(datastore);

generateN0des();
generatePersons();
