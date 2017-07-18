import Thing from '../../../models/gcpDatastore/Thing';

export async function getThingBy_id(_id) {
  let response = null;

  try {
    response = await Thing.get(_id).then(entity => entity.plain());
  } catch (err) {
    console.log('getThingBy_id err', err);
  }

  return response;
}
