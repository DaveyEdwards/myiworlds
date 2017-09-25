import datastoreClient from './dbconnection';

export default async function getEntityBy_id(kind, _id, viewerId) {
  let response = null;
  try {
    const result = await datastoreClient.get(datastoreClient.key([kind, _id]));
    if (result[0].public) {
      response = result[0];
    } else if (
      viewerId === result[0].creator &&
      result[0].editors.includes(viewerId) &&
      result[0].viewers.includes(viewerId)
    ) {
      response = result[0];
    } else if (_id === viewerId) {
      response = result[0];
    } else {
      response = { error: 'Sorry, the creator has not allowed you to see this' };
    }
  } catch (err) {
    console.log('getEntityBy_id err', err);
  }
  return console.log('response', response);
}
