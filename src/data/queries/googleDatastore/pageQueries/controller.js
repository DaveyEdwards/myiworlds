/* eslint no-unused-vars: 0 */
const gstore = require('gstore-node');
const Page = require('../../../models/googleDatastore/pageModel');

const datastore = require('@google-cloud/datastore')({
  projectId: 'myiworlds-164603',
  keyFilename: './src/google_api_service_key.json'
});

gstore.connect(datastore);

export async function getPageList(req) {
  let response = null;

  try {
    // const pageCursor = req.cursor;
    response = await Page.list()
        .then((res) => {
          return res; // only present if more results
        });
  } catch (err) {
    console.log('getPage err', err);
  }

  return console.log(response);
};

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

export async function getPagesBy_id(_ids) {
  let response = null;

  try {
    response = await Page.get(_ids, null, null, null, { preserveOrder: true })
      .then((entities) => {
        return entities.map((entity)=> {
          return entity.plain();
        });
    });

  } catch (err) {
    console.log('getPagesBy_id err', err);
  }

  return console.log(response);
};

export async function createPage(page) {
  let response = null;

  try {
    const entityData = Page.sanitize(page);

    const pageEntity = new Page(entityData, entityData._id);

    response = await pageEntity.save()
      .then((entity) => {
        return entity.plain();
      });

  } catch (err) {
    console.info('savePage err', err)
  }
  return console.log(response);
}

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
  return console.log(response);
}

export async function deletePageBy_id(_id) {
  let response = null;

  try {
    response = await Page.delete(_id);
  } catch (err) {
    console.info('deletePageBy_id err', err)
  }
  return response;
}
