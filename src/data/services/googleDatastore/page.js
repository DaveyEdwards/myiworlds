import {
  save,
  batchSave,
  runQuery,
  lookupEntities,
  getEntity,
  getCountWithQuery,
  deleteEntities
} from './api';
import Constants from './constant';

const KEY = 'AA_PROTO_PAGES';
const LIMIT = Constants.LIMIT_PAGE;

export async function savePage(item) {
  let ret = null;
  try {
    const entity = {
      key: [KEY, item._id],
      data: item,
    };
    ret = await save(entity);
  } catch (err) {
    console.info('savePage err', err);
  }
  return ret;
}

export async function savePages(items) {
  let ret = null;
  try {
    const entities = items.map(item => ({
      key: [KEY, item._id],
      data: item,
    }));
    console.log('savePages', entities);
    ret = await batchSave(entities);
  } catch (err) {
    console.info('savePages err', err);
  }
  return ret;
}

export async function runPageQuery(filters = [], offset = 0, _limit = LIMIT) {
  let ret = [];
  try {
    let limit = _limit;
    if (limit === 0) {
      limit = LIMIT;
    }
    ret = await runQuery(KEY, filters, offset, limit);
  } catch (err) {
    console.log('runPageQuery err', err);
  }
  return ret;
}

export async function getPages(_ids) {
  let ret = [];
  try {
    const keys = _ids.map(_id => ([KEY, _id]));
    if (keys.length > 0) {
      ret = await lookupEntities(keys);
    }
  } catch (err) {
    console.info('getPages err', err);
  }
  return ret;
}

export async function getPagesByID(ids) {
  let ret = [];
  try {
    const keys = ids.map(id => ([KEY, id]));
    if (keys.length > 0) {
      ret = await lookupEntities(keys);
    }
  } catch (err) {
    console.info('getPages err', err);
  }
  return ret;
}

export async function getPageByID(id) {
  let ret = null;
  try {
    ret = await getEntity([KEY, id]);
  } catch (err) {
    console.info('getPageByID err', err);
  }
  return ret;
}

export async function getPageByType(path) {
  let ret = null;
  try {
    ret = await getEntity([KEY, path]);
  } catch (err) {
    console.info('getPageByType err', err);
  }
  return ret;
}

export async function getPageByPath(path) {
  let ret = null;
  try {
    ret = await getEntity([KEY, path]);
  } catch (err) {
    console.info('getPageByPath err', err);
  }
  return ret;
}

export async function getTotalPageCount(query = []) {
  let ret = 0;
  try {
    ret = await getCountWithQuery(KEY, query);
  } catch (err) {
    console.info('getTotalPageCount err', err);
  }
  return ret;
}
