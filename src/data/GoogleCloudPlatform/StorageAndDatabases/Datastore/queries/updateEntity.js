import datastoreClient from './dbconnection';
import cloneEntity from './cloneEntity';

export default async function updateEntity(entity, viewerId) {
  console.time('UpdateEntity time to complete: ');
  let response = null;
  let kind = null;
  let dsKey = null;

  entity.map((entityFeilds) => {
    if (entityFeilds.name === '_id') {
      if (!entityFeilds.value) {
        return console.log('Sorry, You can not edit that anymore.');
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

  try {
    const checkIfEntityExists = await datastoreClient.get(key);
    if (checkIfEntityExists[0]._id) {
      console.log('Yup I can confirm it exists');
    }
    if (
      viewerId === checkIfEntityExists[0].creator ||
      checkIfEntityExists[0].editors.includes(viewerId)
    ) {
      response = await cloneEntity(checkIfEntityExists[0]).then(() =>
        datastoreClient.update(newEntity),
      );
    } else {
      return console.log('Your not allowed to touch this, gtfo');
    }
  } catch (err) {
    console.error('update err', err);
  }
  // const doubleCheckItWasCreated = await datastoreClient.get(key);
  // response = doubleCheckItWasCreated;

  console.timeEnd('UpdateEntity time to complete: ');
  return response;
}
