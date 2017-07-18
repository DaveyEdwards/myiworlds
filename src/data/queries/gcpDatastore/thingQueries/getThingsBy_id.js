import Thing from '../../../models/gcpDatastore/Thing';

export async function getThingsBy_id(_ids) {
  let response = null;
  try {
    response = await Thing.get(_ids, null, null, null, { preserveOrder: true });
  } catch (err) {
    return {
      status: 'ERROR',
      errorId: 'getThingsBy_id err',
      err,
    };
  }

  return response.map(entity => entity.plain());
}
