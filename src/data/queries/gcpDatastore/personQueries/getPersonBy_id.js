import Person from '../../../models/gcpDatastore/Person';
// IMPORT PATH NEEDS TO BE FIXED
export async function getPersonBy_id(_id) {
  let response = null;

  try {
    response = await Person.get(_id).then(entity => entity.plain());
  } catch (err) {
    console.log('getPersonBy_id err', err);
  }

  return response;
}
