import User from '../../../models/googleDatastore/userModel';

/* Example use

*/
export async function createUser(user) {
  let response = null;

  try {
    const entityData = User.sanitize(user);
    const userEntity = new User(entityData, entityData._id);
    console.log('userEntity', userEntity);

    response = await userEntity.save()
      .then((entity) => {
        return entity.plain();
      });

  } catch (err) {
    console.info('saveUser err', err)
  }
  return response;
}

/* Example response
{

}
*/
