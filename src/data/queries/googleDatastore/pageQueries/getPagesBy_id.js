import Page from '../../../models/googleDatastore/pageModel';

/*  Example use
  getPagesBy_id([
    'interface000010000000000000000000002',
    'text00001000000000000000000000000001',
    'image0000100000000000000000000000001'
  ]);
*/
export async function getPagesBy_id(_ids) {
  try {
    const response = await Page.get(_ids, null, null, null, { preserveOrder: true });
  } catch (err) {
    return {
        status: 'ERROR',
        errorId: 'getPagesBy_id err',
        err,
    };
  }

  return response.map(entity => entity.plain());
};

/* Example response

[
  {
    _id: 'text00001000000000000000000000000001',
    title: 'Title of this text box',
    created: 2017-06-04T21:00:33.821Z,
    ... rest of fields
  },
  {
    _id: 'interface000010000000000000000000002'
    title: 'Top Navigation',
    created: 2017-06-04T21:00:33.820Z,
    ... rest of fields
  },
  {
    _id: 'image0000100000000000000000000000001',
    title: 'ALT_TEXT_FOR_IMAGE',
    created: 2017-06-04T21:00:33.822Z,
    ... rest of fields
  }
]
*/
