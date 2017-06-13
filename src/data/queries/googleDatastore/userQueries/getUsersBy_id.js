import User from '../../../models/googleDatastore/userModel';

/*  Example use

*/
export async function getUsersBy_id(_ids) {
  let response = null;
  try {
    response = await User.get(_ids, null, null, null, { preserveOrder: true });
  } catch (err) {
    return {
        status: 'ERROR',
        errorId: 'getUsersBy_id err',
        err,
    };
  }

  return response.map(entity => entity.plain());
};

/* Example response


*/
