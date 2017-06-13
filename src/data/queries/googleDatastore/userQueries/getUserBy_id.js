import User from '../../../models/googleDatastore/userModel';

/* Example use

*/
export async function getUserBy_id(_id) {
  let response = null;

  try {
    response = await User.get(_id)
      .then((entity) => {
        return entity.plain();
    });
  } catch (err) {
    console.log('getUserBy_id err', err);
  }

  return response;
};

/* Example Response
{

}
*/
