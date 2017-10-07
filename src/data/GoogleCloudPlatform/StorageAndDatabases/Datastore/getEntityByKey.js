import datastoreClient from './dbconnection';

export default async function getEntityByKey(kind, _id, viewerId) {
  console.time('getEntityByKey time to complete: ');

  let response = null;
  try {
    const result = await datastoreClient.get(datastoreClient.key([kind, _id]));
    if (
      result[0].public ||
      (viewerId === result[0].creator && result[0].viewers.includes(viewerId)) ||
      _id === viewerId
    ) {
      response = result[0];
    } else {
      response = { error: 'Sorry, the creator has not allowed you to see this' };
    }
  } catch (error) {
    response = {
      type: 'ERROR',
      title: 'getEntityByKey had a error',
      page: 'slug-to-redirect-page',
      array: [error, kind, _id, viewerId],
    };
  }
  console.timeEnd('getEntityByKey time to complete: ');
  return response;
}
