import datastoreClient from './dbconnection';
import cloneToNewEntity from './cloneToNewEntity';

export default async function updateEntity(entityToUpdate, viewerId) {
  console.time('updateEntity time to complete');
  const response = {
    message: '',
    updatedCircle: null,
    latestVersionOfEntity: null,
  };
  let kind = null;
  let dsKey = null;

  entityToUpdate.map((entityFeilds) => {
    if (entityFeilds.name === '_id') {
      if (!entityFeilds.value) {
        return (response.message = 'You cannot edit that anymore');
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
  const data = entityToUpdate;
  const newEntity = {
    key,
    data,
  };

  try {
    await datastoreClient.get(key).then(async (entity) => {
      if ((viewerId === entity[0].creator) || (entity[0].editors.includes(viewerId))) {
        const createdCloneEntity = await cloneToNewEntity(entity[0]);
        const updatedEntity = await datastoreClient.update(newEntity)
          .then(() => datastoreClient.get(key));

        response.latestVersionOfEntity = createdCloneEntity;
        response.updatedEntity = updatedEntity[0];
      } else {
        response.message = 'You do not have the required permissions to view this';
      }
    });
  } catch (error) {
    response.message = 'Sorry, that entity no longer exists';
    console.error([error, entityToUpdate, viewerId]);
  }
  console.timeEnd('updateEntity time to complete');
  return response;
}
