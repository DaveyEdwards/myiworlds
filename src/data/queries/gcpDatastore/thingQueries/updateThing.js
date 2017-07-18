import Thing from '../../../models/gcpDatastore/Thing';

export async function editThing(thing) {
  let response = null;

  try {
    const thing_id = thing._id;
    const entityData = Thing.sanitize(thing);

    response = await Thing.update(thing_id, entityData).then(entity => entity.plain());
  } catch (err) {
    console.info('editThing err', err);
  }
  return response;
}
