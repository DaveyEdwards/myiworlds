import Thing from '../../../models/gcpDatastore/Thing';

export async function createThing(thing) {
  let response = null;

  try {
    const entityData = Thing.sanitize(thing);

    const thingEntity = new Thing(entityData, entityData._id);

    response = await thingEntity.save().then(entity => entity.plain());
  } catch (err) {
    console.info('saveThing err', err);
  }
  return response;
}
