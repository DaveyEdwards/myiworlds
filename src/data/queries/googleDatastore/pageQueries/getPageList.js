// Cursor NOT WORKING
//  Cursor is not passed in. Not sure if it helps to have cursors on DB side + Relay

import Page from '../../../models/googleDatastore/pageModel';

/* Example use
  getPageList();
*/
export async function getPageList(request) {
  let response = [];

  try {
    // const pageCursor = request.cursor; // Breaks when run without cursor, cursor generator has to run first then
    // Page.list(start: pageCursor)
    response = await Page.list()
      .then((response) => {
        return response.entities;
      });

  } catch (err) {
    console.log('getPage err', err);
  }

  return response;
};

/* Example response * Note the cursor at the end
{
  entities: [
    {
      _id 'Jzfm15DAwMRJEahJzfm15DAwtJzfm15DAwMRJEahJzfm15DAwz',
      title: 'A BRAND NEW TITLE',
      created: 2017-06-05T15:50:06.450Z
    },
    {
      _id: 'Jzfm15DAwMRJEahJzfm15DAwstJzfm15DAwvRJEahJzfm15DAw',
      title: 'A TITLE',
      created: 2017-06-05T15:51:14.473Z,
    {
      _id: 'Jzfm15DAwMRJEahJzfm15DAwJzfm15DAwMRJEahJzfm5DAwfav',
      title: 'TITLE',
      created: 2017-06-05T16:29:39.871Z
    }
  ],
  nextPageCursor: 'a_long_complex_string_DAwMRJEahJzfm15DAwMRJEahJzfm15DAwMRJEahJzfm15'
}
*/
