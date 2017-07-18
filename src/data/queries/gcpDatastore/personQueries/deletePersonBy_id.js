import Person from '../../../models/gcpDatastore/Person';

export async function deletePersonBy_id(_id) {
  let response = null;

  try {
    response = await Person.delete(_id).then((res) => {
      if (!res.success) {
        console.log('No entity deleted. There is no Person Entity with the _id provided');
      }
      return res;
    });
  } catch (err) {
    console.info('deletePersonBy_id err', err);
  }
  return console.log(response);
}
