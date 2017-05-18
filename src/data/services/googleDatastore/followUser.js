import {
  save,
  lookupEntities,
  runQuery
} from './api';
import Constants from './constant';

const LIMIT = Constants.LIMIT_USER;
const KEY = 'AA_PROTO_FOLLOW_USER';

export async function getFollowingUsers(userId, authorIds) {
  let ret = [];
  try {
    const keys = authorIds.map(authorId => ([KEY, `${userId}:${authorId}`]));
    if (keys.length > 0) {
      ret = await lookupEntities(keys);
    }
  } catch (err) {
    console.info('getFollowingUsers err', err);
  }
  return ret;
}

export async function followingUser(userId, authorId, followed = false) {
  let ret = null;
  try {
    const id = `${userId}:${authorId}`;
    const data = { id, authorId, userId, followed };
    const entity = { key: [KEY, id], data };
    await save(entity);
    ret = data;
  } catch (err) {
    console.info('followingUser err', err);
  }
  return ret;
}

export async function runFollowingQuery(filters = [], offset = 0, _limit = LIMIT) {
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
