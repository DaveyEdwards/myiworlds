import { getN0deByPath } from './getN0deByPath';
import N0de from '../n0deModel';

// eslint-disable-next-line camelcase
export async function getN0deBy_id(_id) {
  let response = null;

  try {
    response = await N0de.get(_id).then(entity => entity.plain());
  } catch (err) {
    // eslint-disable-next-line no-console
    const notFoundPage = 'not-found';
    response = await getN0deByPath({ notFoundPage });

    console.log('\n', '\n', 'getN0deBy_id Could not find that N0de.Located in file: "src/data/GoogleCloudPlatform/StorageAndDatabases/Datastore/N0de/Queries/getN0deBy_id" ', '\n', '\n');
  }

  return response;
}
