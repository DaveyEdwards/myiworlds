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

const KEY = 'AA_PROTO_CATEGORIES';
const LIMIT = Constants.LIMIT_CATEGORY;

export async function saveCategory(item) {
  let ret = null;
  try {
    const entity = {
      key: [KEY, item.type],
      data: item,
    };
    ret = await save(entity);
  } catch (err) {
    console.info('saveCategory err', err);
  }
  return ret;
}

export async function saveCategories(items) {
  let ret = null;
  try {
    const entities = items.map(item => ({
      key: [KEY, item.type],
      data: item,
    }));
    console.log('saveCategories', entities);
    ret = await batchSave(entities);
  } catch (err) {
    console.info('saveCategories err', err);
  }
  return ret;
}

export async function runCategoryQuery(filters = [], offset = 0, _limit = LIMIT) {
  let ret = [];
  try {
    let limit = _limit;
    if (limit === 0) {
      limit = LIMIT;
    }
    ret = await runQuery(KEY, filters, offset, limit);
  } catch (err) {
    console.log('runCategoryQuery err', err);
  }
  return ret;
}

export async function getCategories(types) {
  let ret = [];
  try {
    const keys = types.map(type => ([KEY, type]));
    if (keys.length > 0) {
      ret = await lookupEntities(keys);
    }
  } catch (err) {
    console.info('getCategories err', err);
  }
  return ret;
}
export async function getCategoryByType(type) {
  let ret = null;
  try {
    ret = await getEntity([KEY, type]);
  } catch (err) {
    console.info('getCategoryByType err', err);
  }
  return ret;
}

export async function getTotalCategoryCount(query = []) {
  let ret = 0;
  try {
    ret = await getCountWithQuery(KEY, query);
  } catch (err) {
    console.info('getTotalCategoryCount err', err);
  }
  return ret;
}

