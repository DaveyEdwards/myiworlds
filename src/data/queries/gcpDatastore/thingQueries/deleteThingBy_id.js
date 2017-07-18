import Thing from '../../../models/gcpDatastore/Thing';

export async function deleteThingBy_id(_id) {
  let response = null;

  try {
    response = await Thing.delete(_id).then((res) => {
      if (!res.success) {
        console.log('No entity deleted. There is no Thing Entity with the _id provided');
      }
      return res;
    });
  } catch (err) {
    console.info('deleteThingBy_id err', err);
  }
  return console.log(response);
}
