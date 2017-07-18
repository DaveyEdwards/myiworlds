import gstore from 'gstore-node';
import config from '../../config';
import { generateThings } from './thingsSeed';
import { generatePersons } from './personsSeed';

// Connect the application to Google Datastore
// This shouldn't have to be here and should be able to be in a file the server calls.
const datastore = require('@google-cloud/datastore')({
  projectId: config.datastore.project_id,
  keyFilename: config.datastore.gcpApiServiceKeyPathFromRoot,
});

gstore.connect(datastore);

generateThings();
generatePersons();
