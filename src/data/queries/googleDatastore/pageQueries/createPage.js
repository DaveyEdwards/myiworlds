import Page from '../../../models/googleDatastore/pageModel';

/* Example use
createPage({
  _id: 'TVSTvnflist0000100000000000000000001',
  type: 'a_content_type',
  title: 'A  Great Title',
});
*/
export async function createPage(page) {
  let response = null;

  try {
    const entityData = Page.sanitize(page);

    const pageEntity = new Page(entityData, entityData._id);

    response = await pageEntity.save().then(entity => entity.plain());
  } catch (err) {
    console.info('savePage err', err);
  }
  return response;
}

/* Example response
{
  id: 'TVSTvnflist0000100000000000000000001', // Note this id is just a copy of _id and will not effect GraphQL/Relay
  _id: 'TVSTvnflist0000100000000000000000001',
  type: 'a_content_type',
  title: 'A  Great Title',
  public: false, // Default value
  created: 2017-06-05T23:41:31.149Z, // Automatically generated when added
  lastUpdated: 2017-06-05T23:41:31.149Z // Automatically generated when added
}
*/
