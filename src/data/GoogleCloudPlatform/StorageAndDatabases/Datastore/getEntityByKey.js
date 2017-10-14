import datastoreClient from './dbconnection';

export default async function getEntityByKey(kind, _id, viewerId) {
  console.time('getEntityByKey time to complete: ');

  const response = {
    message: '',
    entity: null,
  };
  try {
    const result = await datastoreClient.get(datastoreClient.key([kind, _id]));
    if (
      result[0].public ||
      (viewerId === result[0].creator && result[0].viewers.includes(viewerId)) ||
      _id === viewerId
    ) {
      response.message = 'Got it! Heres the entity';
      response.entity = result[0];
    } else {
      response.message = 'Sorry, the creator has not allowed you to see this';
    }
  } catch (error) {
    response.message = 'getEntityByKey had a actual error, something is wrong';
    console.error([error, kind, _id, viewerId]);
  }
  console.timeEnd('getEntityByKey time to complete: ');
  return response;
}
