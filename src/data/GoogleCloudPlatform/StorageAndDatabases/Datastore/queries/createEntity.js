import uuid from 'uuid/v1';
import datastoreClient from './dbconnection';
import getEntityByIndexedValue from './getEntitiesByIndexedValue';
import getEntityBy_id from './getEntityBy_id';

// Add viewerId passed in and check if that viewer is allowed to create
export default async function createEntity(entity) {
  console.time('Time to createEntity: ');
  let response = null;
  let kind = null;
  let dsKey = null;

  try {
    entity.map((entityFeilds) => {
      if (entityFeilds.name === '_id') {
        if (entityFeilds.value === '' || entityFeilds.value === null) {
          const newId = (entityFeilds.value = uuid());
          dsKey = newId;
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
    response = await datastoreClient.insert(newEntity).then(createdEntity => createdEntity[0]);
  } catch (err) {
    response = {
      error:
        'There was an error creating the entity, it is likely the _id you tried to use to create that entity already exists',
    };
  }
  console.timeEnd('Time to createEntity: ');
  return console.log('response', response);
}
