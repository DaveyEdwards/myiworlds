import datastoreClient from './dbconnection';

export default async function cloneToNewEntity(entityObject) {
  console.time('cloneToNewEntity time to complete');
  const newKind = `${entityObject.kind}-clones`;
  let response = null;
  const dsKey = null;
  const entity = [];
  const nameValues = Object.entries(entityObject);

  function buildEntityWithNewIndexes() {
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
  }
  try {
    const key = datastoreClient.key([newKind, dsKey]);
    const data = entity;
    const newEntity = {
      key,
      data,
    };

    buildEntityWithNewIndexes();
    response = await datastoreClient.save(newEntity).then(() => datastoreClient.get(key));
  } catch (error) {
    response = {
      type: 'ERROR',
      title: 'cloneToNewEntity',
      page: 'slug-to-redirect-page',
      array: [error, entityObject],
    };
  }
  console.timeEnd('cloneToNewEntity time to complete');
  return response;
}
