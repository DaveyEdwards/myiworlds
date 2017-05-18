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

const KEY = 'AA_PROTO_FEEDS';
const LIMIT = Constants.LIMIT_FEED;

export async function saveFeed(item) {
  let ret = null;
  try {
    const entity = {
      key: [KEY, item.id],
      data: item,
    };
    ret = await save(entity);
  } catch (err) {
    console.info('saveFeed err', err);
  }
  return ret;
}

export async function saveFeeds(items) {
  let ret = null;
  try {
    const entities = items.map(item => ({
      key: [KEY, item.id],
      data: item,
    }));
    ret = await batchSave(entities);
  } catch (err) {
    console.info('saveFeeds err', err);
  }
  return ret;
}

export async function runFeedQuery(filters, offset = 0, _limit = LIMIT) {
  let ret = [];
  try {
    let limit = _limit;
    if (limit === 0) {
      limit = LIMIT;
    }
    ret = await runQuery(KEY, filters, offset, limit);
  } catch (err) {
    console.log('runFeedQuery err', err);
  }
  return ret;
}

export async function getFeeds(ids) {
  let ret = [];
  try {
    const keys = ids.map(id => ([KEY, id]));
    if (keys.length > 0) {
      ret = await lookupEntities(keys);
    }
  } catch (err) {
    console.info('getFeeds err', err);
  }
  return ret;
}
export async function getFeedById(id) {
  let ret = null;
  try {
    ret = await getEntity([KEY, id]);
  } catch (err) {
    console.info('getFeedById err', err);
  }
  return ret;
}

export async function getTotalFeedCount(query = []) {
  let ret = 0;
  try {
    ret = await getCountWithQuery(KEY, query);
  } catch (err) {
    console.info('getTotalFeedCount err', err);
  }
  return ret;
}

export async function deleteFeeds(feeds) {
  const keys = [];
  feeds.map(feed => keys.push([KEY, feed.id]));
  try {
    await deleteEntities(keys);
  } catch (err) {
    console.info('deleteFeeds err', err);
  }
}

export async function updateFeedLikeCount(feedId, liked) {
  let feed = null;
  try {
    feed = await getFeedById(feedId);
    let likedCount = feed.likedCount || 0;
    if (liked) {
      likedCount += 1;
    } else {
      likedCount -= 1;
      if (likedCount < 0) {
        likedCount = 0;
      }
    }
    feed.likedCount = likedCount;
    await saveFeed(feed);
  } catch (err) {
    console.info('updateFeedLikeCount err', err);
  }
  return feed;
}
