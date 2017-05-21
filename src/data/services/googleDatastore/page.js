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
      key: [KEY, item.type],
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
      key: [KEY, item.type],
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

export async function getPages(types) {
  let ret = [];
  try {
    const keys = types.map(type => ([KEY, type]));
    if (keys.length > 0) {
      ret = await lookupEntities(keys);
    }
  } catch (err) {
    console.info('getPages err', err);
  }
  return ret;
}
export async function getPageByType(type) {
  let ret = null;
  try {
    ret = await getEntity([KEY, type]);
  } catch (err) {
    console.info('getPageByType err', err);
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
