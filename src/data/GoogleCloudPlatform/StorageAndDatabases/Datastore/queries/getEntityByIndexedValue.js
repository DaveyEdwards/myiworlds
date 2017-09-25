import { datastore } from 'google-cloud';
import GCPConfig from '../../../config/settings';

const datastoreClient = datastore({
  projectId: GCPConfig.project_id,
  keyFilename: GCPConfig.datastore.gcpDatastoreOwnerServiceKeyPath,
});

export default async function getEntityByIndexedValue(kind, property, value) {
  let response = null;
  try {
    const query = await datastoreClient.createQuery(kind).filter(property, '=', value).limit(1);

    const runQuery = await datastoreClient.runQuery(query);

    // Cursor not needed for single queries
    const cursor = runQuery[1].endCursor;
    console.log('cursor ', cursor);

    // This turns response array into object
    response = runQuery[0][0];
  } catch (err) {
    console.log('getEntityBy_id err', err);
  }
  return console.log('response', response);
}
