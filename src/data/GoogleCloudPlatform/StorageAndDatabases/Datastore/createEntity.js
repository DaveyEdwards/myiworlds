import datastoreClient from './dbconnection';

export default async function createEntity(entity) {
  console.time('Time to createEntity');
  const response = {
    message: null,
    createdEntity: null,
  };
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

    response.message = 'You successfully created a entity';
    response.createdEntity = createAndGet[0];
  } catch (error) {
    response.message = 'There was a error I did not plan for';
    console.error([error, entity[0]]);
  }
  console.timeEnd('Time to createEntity');
  return response;
}
