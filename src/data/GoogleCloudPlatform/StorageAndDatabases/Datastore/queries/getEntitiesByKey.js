import datastoreClient from './dbconnection';

/* eslint-disable camelcase */
export default async function getEntitiesByKey(kind, _ids, viewerId) {
  console.time('getEntitiesByKey TTC: ');
  let response = [];

  try {
    if (_ids.length > 0) {
      const dsKeys = _ids.map(_id => [kind, _id]);
      const keys = dsKeys.map(key => datastoreClient.key(key));
      const sorted = [];

      let getEntities = await datastoreClient.get(keys);
      _ids.forEach(_id => sorted.push(getEntities[0].filter(item => item._id === _id)[0]));

      // Removes undefined values
      getEntities = sorted.filter(Boolean);

      getEntities.forEach((entity) => {
        if (entity.public === true) {
          response.push(entity);
        }
        if (viewerId === entity.creator || entity.editors.includes(viewerId)) {
          response.push(entity);
        }
      });
    }
  } catch (error) {
    response = { message: 'getEntitiesByKey had an error.', error };
  }

  console.timeEnd('getEntitiesByKey TTC: ');
  return console.log('rrespons', response);
}
