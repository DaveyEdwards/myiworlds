import Circle from '../circleModel';

// Make it so if it can't find the circle requested that it finds the default 'not-found' page
export async function getCircleByPath(path) {
  let response = null;

  try {
    response = await Circle.findOne({ path }).then(entity => entity.plain());
  } catch (err) {
    const notFoundPath = 'not-found';

    response = await Circle.findOne({ notFoundPath }).then(entity => entity.plain());
  } finally {
    return response;
  }
}
