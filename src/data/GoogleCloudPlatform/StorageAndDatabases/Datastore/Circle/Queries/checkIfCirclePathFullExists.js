import Circle from '../circleModel';

export async function checkIfCirclePathFullExists(fullPathToCheck) {
  try {
    await Circle.findOne({ pathFull: fullPathToCheck }).then(entity => entity.plain());
    return true;
  } catch (err) {
    return false;
  }
}
