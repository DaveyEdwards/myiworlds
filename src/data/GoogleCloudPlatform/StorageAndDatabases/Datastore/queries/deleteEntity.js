import datastoreClient from './dbconnection';
import getEntities from './getEntities';

// Used for right after creation, until maybe after a few hours then it goes to create only.
export default async function deleteEntity(kind, _id, viewerId) {
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
          999999,
          null,
        );
        // clones.map(entity => return entity)
        const EntitiesToDelete = [];
        // NEED TO get keys, _id is no longer key for this kind
        clones.forEach(entity => EntitiesToDelete.push(entity.key));
        // const cloneKeys = await datastoreClient.get(datastoreClient.key([kind, _id]));
        // const deleteAllClones = await datastoreClient.delete(cloneKeys);

        const delEntity = await datastoreClient.delete(datastoreClient.key([kind, _id]));
        if (delEntity[0].mutationResults) {
          response = { success: delEntity[0] };
        } else {
          response = { error: 'Conflict detected' };
        }
      } else {
        response = { error: 'You must be the creator to delete this' };
      }
    } else {
      response = { error: 'The entity you are trying to delete no longer exists' };
    }
  } catch (err) {
    response = { error: 'Something went wrong, try again' };
  }
  return console.log('response', response);
}
