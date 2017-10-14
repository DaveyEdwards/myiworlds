import uuid from 'uuid/v1';
import datastoreClient from './dbconnection';

/* eslint-disable camelcase */
export default async function cloneToNewEntity(entityObject) {
  console.time('cloneToNewEntity time to complete');
  const newKind = `${entityObject.kind}-clones`;
  let response = null;
  const entity = [];
  const nameValues = Object.entries(entityObject);
  const new_id = uuid();
  const moveOld_id = {
    name: `${entityObject.kind}_id`,
    value: entityObject._id,
  };

  entity.push(moveOld_id);

  function buildEntityWithNewIndexes() {
    nameValues.forEach((nameValueArray) => {
      const name = nameValueArray[0];
      const value = nameValueArray[1];
      const builtEntityPropertyObject = {};

      builtEntityPropertyObject.name = name;

      if (nameValueArray[0] !== '_id' && nameValueArray[0] !== 'dateUpdated') {
        builtEntityPropertyObject.excludeFromIndexes = true;
      }

      if (nameValueArray[0] === '_id') {
        builtEntityPropertyObject.value = new_id;
      } else {
        builtEntityPropertyObject.value = value;
      }

      entity.push(builtEntityPropertyObject);
    });
  }
  try {
    const key = datastoreClient.key([newKind, new_id]);
    const data = entity;
    const newEntity = {
      key,
      data,
    };

    buildEntityWithNewIndexes();

    await datastoreClient.save(newEntity);

    response = {
      new_id,
      newKind,
    };
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
