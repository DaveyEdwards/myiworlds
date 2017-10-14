import datastoreClient from './dbconnection';

/* eslint-disable camelcase */
export default async function getEntitiesByKeys(kind, _ids, viewerId) {
  console.time('getEntitiesByKey TTC: ');
  let response = {
    message: '',
    _ids: [],
    entities: [],
  };

  try {
    if (_ids && _ids.length > 0) {
      const dsKeys = _ids.map(_id => [kind, _id]);
      const keys = dsKeys.map(key => datastoreClient.key(key));
      const sorted = [];

      const getEntities = await datastoreClient.get(keys);
      _ids.forEach(_id => sorted.push(getEntities[0].filter(item => item._id === _id)[0]));

      // Removes undefined values
      // getEntities = sorted.filter(Boolean);

      getEntities[0].forEach((entity) => {
        if (
          entity.public === true ||
          viewerId === entity.creator ||
          (entity.viewers && entity.viewers.includes(viewerId)) ||
          entity._id === viewerId
        ) {
          response.entities.push(entity);
        } else {
          response.entities.push({
            _id: entity._id,
            type: 'PERMISSION_ERROR',
            title: 'Not enough permissions',
          });
        }
      }).then(() => (response.message = 'I got everything I could'));
    }
  } catch (error) {
    response = {
      message: 'Something went wrong getting those Entities',
      _ids: [],
      entities: [],
      number: 0,
    };
  }
  console.timeEnd('getEntitiesByKey TTC: ');
  return response;
}
