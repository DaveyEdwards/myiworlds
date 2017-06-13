import Page from '../../../models/googleDatastore/pageModel';

/*  Example use
deletePageBy_id('TVSTvnflist0000100000000000000000001');

 // Can also pass array of _ids
 deletePageBy_id(['button_path0000100000000000000000001', 'button_path0000100000000000000000002']);
*/

export async function deletePageBy_id(_id) {
  let response = null;

  try {
    response = await Page.delete(_id).then((res) => {
      if(!res.success) {
        console.log('No entity deleted. There is no Page Entity with the _id provided');
      }
      return res;
    });
  } catch (err) {
    console.info('deletePageBy_id err', err)
  }
  return console.log(response);
}

/* Example response
{
  mutationResults: [
    {
      key: null,
      version: '1496707478784000',
      conflictDetected: false
    }
  ],
  indexUpdates: 5,
  key:
   Key {
     namespace: undefined,
     name: 'TVSTvnflist0000100000000000000000001',
     kind: 'Page',
     path: [Getter]
   },
   success: true }
*/
