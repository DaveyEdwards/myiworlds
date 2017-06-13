import Page from '../../../models/googleDatastore/pageModel';

/* Example use
  getPageByPath('examples/project/default' );
*/
export async function getPageByPath(path) {
  let response = null;

  try {
    response = await Page.findOne({ path: path }).then(entity => {
      return entity.plain();
    });
  } catch (err) {
    console.log('getPageByPath err', err);
  }

  return response;
}

/* Example Response
{ id: 'project00001000000000000000000000001',
  type: 'project',
  path: 'examples/project/default',
  created: 2017-06-11T15:26:40.267Z,
  _id: 'project00001000000000000000000000001',
  lastUpdated: 2017-06-11T15:26:40.267Z,
  title: 'MyiWorlds',
*/
