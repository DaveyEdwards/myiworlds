import datastoreClient from './dbconnection';

// Add auto creation of _ids if not there, review old create func
export default async function deleteEntity(entity) {
  let response = null;
  let kind = null;
  let dsKey = null;

  try {
    entity.map((entityFeilds) => {
      if (entityFeilds.name === '_id' && entityFeilds.value === '') {
        if (entityFeilds.value === '') {
          entityFeilds.value = uuid();
        }
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

    const checkIfExists = await datastoreClient.get(datastoreClient.key([kind, dsKey]));

    if (!checkIfExists[0]) {
      response = await datastoreClient.save(newEntity);
    } else {
      console.log('Entity already exists');
    }
  } catch (err) {
    console.error('save err', err);
  }
  return response;
}
