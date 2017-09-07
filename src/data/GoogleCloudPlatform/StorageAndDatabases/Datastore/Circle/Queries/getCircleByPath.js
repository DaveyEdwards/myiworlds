import Circle from '../circleModel';

export async function getCircleByPath(pathFull) {
  let response = null;

  try {
    response = await Circle.findOne({ pathFull }).then(entity => entity.plain());
  } catch (err) {
    const defaultPath = {
      pathFull: 'not-found',
    };
    response = await Circle.findOne(defaultPath).then(entity => entity.plain());
  }

  return response;
}
