import datastoreClient from './dbconnection';
import getEntities from './getEntities';

// Used for right after creation, until maybe after a few hours then it goes to create only.
export default async function deleteEntity(kind, _id, viewerId) {
  console.time('deleteEntity time to complete');
  let response = null;
  const checkIfExists = await datastoreClient.get(datastoreClient.key([kind, _id]));

  try {
    if (checkIfExists[0] !== undefined) {
      if (viewerId === checkIfExists[0].creator) {
        const clones = await getEntities(
          `${kind}-clones`,
          [
            {
              property: '_id',
              condition: '=',
              value: _id,
            },
          ],
          // Might have to make if there is more after 999999 send another query/delete request
          999999,
          null,
        );

        const cloneEntitiesToDelete = [];
        clones[0][0].forEach(entity => cloneEntitiesToDelete.push(entity[datastoreClient.KEY]));

        datastoreClient.delete(cloneEntitiesToDelete);

        const delEntity = await datastoreClient.delete(datastoreClient.key([kind, _id]));

        if (delEntity[0].mutationResults) {
          response = { success: delEntity[0] };
        } else {
          response = {
            type: 'ERROR',
            title: 'deleteEntity error',
            page: 'slug-to-redirect-page',
          };
        }
      } else {
        response = {
          type: 'ERROR',
          title: 'You must be the creator to delete this',
          page: 'slug-to-redirect-page',
        };
      }
    } else {
      response = {
        type: 'ERROR',
        title: 'The entity you are trying to delete no longer exists',
        page: 'slug-to-redirect-page',
      };
    }
  } catch (error) {
    response = {
      type: 'ERROR',
      title: 'deleteEntity error',
      page: 'slug-to-redirect-page',
      array: [error, kind, _id, viewerId],
    };
  }
  console.time('deleteEntity time to complete');
  return console.log('deleteEntity: ', response);
}
