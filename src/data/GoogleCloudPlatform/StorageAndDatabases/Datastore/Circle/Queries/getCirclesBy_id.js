import Circle from '../circleModel';

// eslint-disable-next-line camelcase
export async function getCirclesBy_id(_ids) {
  let response = null;
  try {
    response = await Circle.get(_ids, null, null, null, { preserveOrder: true });
  } catch (err) {
    return {
      status: 'ERROR',
      errorId: 'getCirclesBy_id err',
      err,
    };
  }

  return response.map(entity => entity.plain());
}
