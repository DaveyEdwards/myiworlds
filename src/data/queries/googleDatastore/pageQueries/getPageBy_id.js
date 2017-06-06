import Page from '../../../models/googleDatastore/pageModel';

/* Example use
  getPageBy_id('form_text_email000010000000000000001' );
*/
export async function getPageBy_id(_id) {
  let response = null;

  try {
    response = await Page.get(_id)
      .then((entity) => {
        return entity.plain();
    });
  } catch (err) {
    console.log('getPageBy_id err', err);
  }

  return response;
};

/* Example Response
{
  _id: 'form_text_email000010000000000000001',
  title: 'Mollitia rem aut ex ut.',
  created: 2017-06-04T21:00:33.833Z
  ... rest of fields
}
*/
