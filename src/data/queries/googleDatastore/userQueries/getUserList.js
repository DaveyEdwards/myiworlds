// Cursor NOT WORKING
//  Cursor is not passed in. Not sure if it helps to have cursors on DB side + Relay
import User from '../../../models/googleDatastore/userModel';

/* Example use

*/
export async function getUserList(request) {
  let response = [];

  try {
    // const userCursor = request.cursor; // Breaks when run without cursor, cursor generator has to run first then
    // User.list(start: userCursor)
    response = await User.list()
      .then((response) => {
        return response.entities;
      });

  } catch (err) {
    console.log('getUser err', err);
  }

  return response;
};

/* Example response * Note the cursor at the end
{

}
*/
