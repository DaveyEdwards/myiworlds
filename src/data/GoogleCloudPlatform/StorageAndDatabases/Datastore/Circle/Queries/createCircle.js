import uuid from 'uuid/v1';
import Circle from '../circleModel';
import { checkIfCirclePathFullExists } from './checkIfCirclePathFullExists';

export async function createCircle(circle) {
  let response = null;
  const newCircle = circle;

  // Take creating unique path inside Relay mutation and place here to prevent hack
  if (newCircle.pathFull == null) {
    newCircle.pathFull = newCircle._id;
  }

  // Has to come after assigning new pathFull, or causes error on seeding db
  const checkPath = await checkIfCirclePathFullExists(newCircle.pathFull);

  if (checkPath === true) {
    // TODO: Make this pass a object to change the state ot the CreateCircle mutation
    // eslint-disable-nextline no-console
    return console.log('Circle has already been made');
  }

  // TODO: This is here to allow you to link nodes with your seed file with one another
  // Everything inputed into the db will have its _id auto made for it
  // When ready for production
  if (newCircle._id == null) {
    newCircle._id = uuid();
  }

  try {
    const entityData = Circle.sanitize(newCircle);
    const circleEntity = new Circle(entityData, entityData._id);

    response = await circleEntity.save().then(entity => entity.plain());
  } catch (err) {
    console.info(
      '\n',
      '\n',
      'Help me, I have a ERROR. It is in Google Datastores "createCircleBy_id" database queries.',
      err,
      '\n',
      '\n',
    );
  }
  return response;
}
