import {
  save,
  lookupEntities
} from './api';

const KEY = 'AA_PROTO_LIKE_FEEDS';
export async function getLikedFeeds(userId, feedIds) {
  let ret = [];
  try {
    const keys = feedIds.map(feedId => ([KEY, `${userId}:${feedId}`]));
    if (keys.length > 0) {
      ret = await lookupEntities(keys);
    }
  } catch (err) {
    console.info('getLikedFeeds err', err);
  }
  return ret;
}

export async function likeFeed(userId, feedId, liked = false) {
  let ret = null;
  try {
    const id = `${userId}:${feedId}`;
    const data = { id, feedId, userId, liked };
    const entity = { key: [KEY, id], data };
    await save(entity);
    ret = data;
  } catch (err) {
    console.info('likeFeed err', err);
  }
  return ret;
}
