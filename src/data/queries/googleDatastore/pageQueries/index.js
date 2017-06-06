/* eslint no-unused-vars: 0 */
import gstore from 'gstore-node';
import config from '../../../../config';

import { createPage }       from './createPage';
import { deletePageBy_id }  from './deletePageBy_id';
import { getPageBy_id }     from './getPageBy_id';
import { getPageList }      from './getPageList';
import { getPagesBy_id }    from './getPagesBy_id';
import { updatePage }       from './updatePage';

// Connect the application to Google Datastore
const datastore = require('@google-cloud/datastore')({
  projectId: config.datastore.projectId,
  keyFilename: config.datastore.googleApiServiceKey
});


export {
  createPage,
  deletePageBy_id,
  getPageBy_id,
  getPageList,
  getPagesBy_id,
  updatePage
};
