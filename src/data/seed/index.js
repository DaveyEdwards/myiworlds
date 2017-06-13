import gstore from 'gstore-node';
import config from '../../config';
import { generatePages } from './pagesSeed';
import { generateUsers } from './usersSeed';

// Connect the application to Google Datastore
const datastore = require('@google-cloud/datastore')({
  projectId: config.datastore.projectId,
  keyFilename: config.datastore.googleApiServiceKey,
});

gstore.connect(datastore);

// generatePages();
// generateUsers();
import { getUserBy_id } from '../queries/googleDatastore/userQueries';
import { getPageByPath } from '../queries/googleDatastore/pageQueries';

// getPageByPath('examples/project/default');
getUserBy_id('user00000000000000000000000000000001');
// getPageBy_id('project00001000000000000000000000001');
