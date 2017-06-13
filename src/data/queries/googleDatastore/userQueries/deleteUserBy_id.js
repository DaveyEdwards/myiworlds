import User from '../../../models/googleDatastore/userModel';

/*  Example use

*/

export async function deleteUserBy_id(_id) {
  let response = null;

  try {
    response = await User.delete(_id).then((res) => {
      if(!res.success) {
        console.log('No entity deleted. There is no User Entity with the _id provided');
      }
      return res;
    });
  } catch (err) {
    console.info('deleteUserBy_id err', err)
  }
  return console.log(response);
}

/* Example response
{

}
*/
