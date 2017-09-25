import datastore from '@google-cloud/datastore';
import GCPConfig from '../../../config/settings';
import getEntityByIndexedValue from './getEntitiesByIndexedValue';

const datastoreClient = datastore({
  projectId: GCPConfig.project_id,
  keyFilename: GCPConfig.datastore.gcpDatastoreOwnerServiceKeyPath,
});

export default async function cloneEntity(entityObject) {
  const newKind = `${entityObject.kind}-clones`;
  let response = null;
  const dsKey = null;
  const entity = [];
  const nameValues = Object.entries(entityObject);

  nameValues.forEach((pair) => {
    const name = pair[0];
    const value = pair[1];
    const tempObj = {};

    if (pair[0] !== '_id' && pair[0] !== 'lastUpdated') {
      tempObj.excludeFromIndexes = true;
    }

    tempObj.name = name;
    tempObj.value = value;

    entity.push(tempObj);
  });

  try {
    const key = datastoreClient.key([newKind, dsKey]);
    const data = entity;
    const newEntity = {
      key,
      data,
    };

    response = await datastoreClient.save(newEntity).then(() => datastoreClient.get(key));
  } catch (err) {
    const errorPage = await getEntityByIndexedValue('Pages', 'slug', 'error-cloning-entity');
    return console.log('errorPage', errorPage);
  }
  return response;
}
