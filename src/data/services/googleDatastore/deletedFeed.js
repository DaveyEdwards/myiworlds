import {
  batchSave,
  lookupEntities,
} from './api';

const KEY = 'AA_PROTO_FEEDS_DELETED';

export async function saveDeletedFeeds(items) {
  let ret = null;
  try {
    const entities = items.map(item => ({
      key: [KEY, item.id],
      data: item,
    }));
    ret = await batchSave(entities);
  } catch (err) {
    console.info('saveDeletedFeeds err', err);
  }
  return ret;
}
export async function getDeletedFeeds(ids) {
  let ret = [];
  try {
    const keys = ids.map(id => ([KEY, id]));
    if (keys.length > 0) {
      ret = await lookupEntities(keys);
    }
  } catch (err) {
    console.info('getDeletedFeeds err', err);
  }
  return ret;
}
