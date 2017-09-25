import { datastore } from 'google-cloud';
import GCPConfig from '../../../config/settings';

const datastoreClient = datastore({
  projectId: GCPConfig.project_id,
  keyFilename: GCPConfig.datastore.gcpDatastoreOwnerServiceKeyPath,
});

/* eslint-disable camelcase */
export default async function getEntitiesBy_ids(kind, _ids) {
  const dsKeys = _ids.map(_id => [kind, _id]);
  let response = null;

  try {
    if (dsKeys.length > 0) {
      const keys = dsKeys.map(key => datastoreClient.key(key));
      const sorted = [];

      response = await datastoreClient.get(keys, { preserveOrder: true });
      _ids.forEach(_id => sorted.push(response[0].filter(item => item._id === _id)[0]));

      response = sorted;
    }
  } catch (err) {
    console.log('lookupEntities err', dsKeys, err);
  }
  return console.log('response', response);
}
}

// By default, google-cloud-node will automatically paginate through all of
// the results that match a query. However, this sample implements manual
// pagination using limits and cursor tokens.
function runPageQuery(kind, pageSize, pageCursor) {
  let query = datastore.createQuery('Task').limit(pageSize);

  if (pageCursor) {
    query = query.start(pageCursor);
  }

  return datastore.runQuery(query).then((results) => {
    const entities = results[0];
    const info = results[1];

    if (info.moreResults !== Datastore.NO_MORE_RESULTS) {
      // If there are more results to retrieve, the end cursor is
      // automatically set on `info`. To get this value directly, access
      // the `endCursor` property.
      return runPageQuery(info.endCursor).then((results) => {
        // Concatenate entities
        results[0] = entities.concat(results[0]);
        return results;
      });
    }

    return [entities, info];
  });
}

// /* eslint-disable camelcase */
// export default async function getEntitiesBy_ids(kind, property, value, limit) {
//   let response = null;
//   try {
//     const query = await datastoreClient.createQuery(kind).filter(property, '=', value).limit(limit);

//     const runQuery = await datastoreClient.runQuery(query);

//     // Cursor not needed for single queries
//     const cursor = runQuery[1].endCursor;
//     console.log('cursor ', cursor);

//     // This turns response array into object
//     response = runQuery[0][0];
//   } catch (err) {
//     console.log('getEntityBy_id err', err);
//   }
//   return console.log('response', response);
// }
