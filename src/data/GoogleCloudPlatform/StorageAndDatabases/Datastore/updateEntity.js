import datastoreClient from './dbconnection';
import cloneToNewEntity from './cloneToNewEntity';

export default async function updateEntity(entityToUpdate, viewerId) {
  console.time('updateEntity time to complete');
  let response = null;
  let kind = null;
  let dsKey = null;

  entityToUpdate.map((entityFeilds) => {
    if (entityFeilds.name === '_id') {
      if (!entityFeilds.value) {
        return (response = {
          type: 'ERROR',
          title: "You can't edit that anymore",
          page: 'slug-to-redirect-page',
        });
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
      if (viewerId === entity[0].creator || entity[0].editors.includes(viewerId)) {
        response = await cloneToNewEntity(entity[0]).then(() => datastoreClient.update(newEntity));
      } else {
        response = {
          type: 'ERROR',
          title: 'You do not have the required permissions to view this',
          page: 'slug-to-redirect-page',
        };
      }
    });
  } catch (error) {
    response = {
      type: 'ERROR',
      title: 'updateEntity error',
      page: 'slug-to-redirect-page',
      array: [error, entityToUpdate, viewerId],
    };
  }
  console.timeEnd('updateEntity time to complete');
  return response;
}
