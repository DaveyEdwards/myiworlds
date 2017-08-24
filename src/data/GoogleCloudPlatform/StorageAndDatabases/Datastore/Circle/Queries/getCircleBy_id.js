import { getCircleByPath } from './getCircleByPath';
import Circle from '../circleModel';

// eslint-disable-next-line camelcase
export async function getCircleBy_id(_id) {
  let response = null;

  try {
    response = await Circle.get(_id).then(entity => entity.plain());
  } catch (err) {
    // eslint-disable-next-line no-console
    const notFoundPage = 'not-found';
    response = await getCircleByPath({ notFoundPage });

    console.log('\n', '\n', 'getCircleBy_id Could not find that Circle.Located in file: "src/data/GoogleCloudPlatform/StorageAndDatabases/Datastore/Circle/Queries/getCircleBy_id" ', '\n', '\n');
  }

  return response;
}
