import datastoreClient from './dbconnection';
import getEntities from './getEntities';

// Used for right after creation, until maybe after a few hours then it goes to create only.
export default async function deleteEntity(kind, _id, viewerId) {
  console.time('deleteEntity time to complete');
  const response = {
    message: '',
    idToDelete: _id,
    numberOfClones: 0,
    clonesDeleted: false,
    wasDeleted: false,
  };
  const checkIfExists = await datastoreClient.get(datastoreClient.key([kind, _id]));

  try {
    if (checkIfExists[0] !== undefined) {
      if (viewerId === checkIfExists[0].creator) {
        const clones = await getEntities(
          `${kind}-clones`,
          [
            {
              property: `${kind}_id`,
              condition: '=',
              value: _id,
            },
          ],
          // Might have to make if there is more after 999999 send another query/delete request
          999999,
          null,
          viewerId,
        );

        if (clones[0].length > 0) {
          const cloneEntitiesToDelete = [];

          clones[0].forEach(entity => cloneEntitiesToDelete.push(entity[datastoreClient.KEY]));

          await datastoreClient.delete(cloneEntitiesToDelete)
          .then(() => {
            response.clonesDeleted = true;
            response.numberOfClones = clones[0].length;
          });
        }

        const delEntity = await datastoreClient.delete(datastoreClient.key([kind, _id]));

        if (delEntity[0].mutationResults) {
          response.message = 'Entity was deleted';
          response.wasDeleted = true;
        } else {
          response.message = 'There was a error';
        }
      } else {
        response.message = 'You must be the creator to delete this';
      }
    } else {
      response.message = 'The entity you are trying to delete no longer exists';
    }
  } catch (error) {
    response.message = 'There was a error I did not plan for';
    console.error([error, kind, _id, viewerId]);
  }
  console.timeEnd('deleteEntity time to complete');
  return response;
}
