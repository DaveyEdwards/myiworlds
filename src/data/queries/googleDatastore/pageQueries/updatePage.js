import Page from '../../../models/googleDatastore/pageModel';

/* Example use
updatePage({
  _id: 'contentlist0000100000000000000000001',
  title: 'A new title',
});
*/
export async function updatePage(page) {
  let response = null;

  try {
    const page_id = page._id;
    const entityData = Page.sanitize(page);

    response = await Page.update(page_id, entityData)
      .then((entity) => {
        return entity.plain();
      });

  } catch (err) {
    console.info('updatePage err', err)
  }
  return response;
}

/* Example Response
{
  _id: 'contentlist0000100000000000000000001',
  title: 'A new title',
  created: 2017-06-04T21:00:33.825Z,
  ... All the entities fields
}

*/
