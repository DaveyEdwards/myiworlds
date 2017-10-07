import datastoreClient from './dbconnection';

export default async function createEntity(entity) {
  console.time('Time to createEntity');
  let response = null;
  let kind = null;
  let dsKey = null;

  try {
    entity.map((entityFeilds) => {
      if (entityFeilds.name === '_id') {
        dsKey = entityFeilds.value;

        return dsKey;
      }
      if (entityFeilds.name === 'kind') {
        kind = entityFeilds.value;
        return kind;
      }
      return null;
    });

    const key = datastoreClient.key([kind, dsKey]);
    const data = entity;
    const newEntity = {
      key,
      data,
    };

    const createAndGet = await datastoreClient
      .insert(newEntity)
      .then(() => datastoreClient.get(key));

    response = createAndGet[0];
  } catch (error) {
    response = {
      type: 'ERROR',
      title: 'createEntity error',
      page: 'slug-to-redirect-page',
      array: [error, entity[0]],
    };
  }
  console.timeEnd('Time to createEntity');
  return response;
}
