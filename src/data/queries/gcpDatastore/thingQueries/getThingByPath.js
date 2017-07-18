import Thing from '../../../models/gcpDatastore/Thing';

export async function getThingByPath(path) {
  let response = null;

  try {
    response = await Thing.findOne({ path }).then(entity => entity.plain());
  } catch (err) {
    console.log('getThingByPath err', err);
  }

  return response;
}
