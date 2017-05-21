import {
  save,
  getEntity,
  runQuery,
  lookupEntities,
  getCountWithQuery,
  batchSave
} from './api';
import Constants from './constant';

const KEY = 'AA_PROTO_USERS';
const LIMIT = Constants.LIMIT_USER;

export async function registerUser(user) {
  let ret = null;
  try {
    const entity = {
      key: [KEY, user.id],
      data: user,
    };
    await save(entity);
    ret = user;
  } catch (err) {
    console.info('registerUser err', err);
  }
  return ret;
}
export async function getUserByID(id) {
  let ret = null;
  try {
    ret = await getEntity([KEY, id]);
  } catch (err) {
    console.info('getUserByID err', err);
  }
  return ret;
}

export async function runUserQuery(filters, offset = 0, _limit = LIMIT) {
  let ret = [];
  try {
    let limit = _limit;
    if (limit === 0) {
      limit = LIMIT;
    }
    ret = await runQuery(KEY, filters, offset, limit);
  } catch (err) {
    console.log('runUserQuery err', err);
  }
  return ret;
}

export async function getUsers(ids) {
  let ret = [];
  try {
    const keys = ids.map(id => ([KEY, id]));
    ret = await lookupEntities(keys);
  } catch (err) {
    console.info('getUsers err', err);
  }
  return ret;
}

export async function getUserCount(query = []) {
  let ret = 0;
  try {
    ret = await getCountWithQuery(KEY, query);
  } catch (err) {
    console.info('getUserCount', err);
  }
  return ret;
}
export async function updateUsers(users) {
  let ret = null;
  try {
    const entities = users.map(user => ({
      key: [KEY, user.id],
      data: user,
    }));
    ret = await batchSave(entities);
  } catch (err) {
    console.info('updateUsers err', err);
  }
  return ret;
}


export async function updateFollowedCounter(authorId, following) {
  let user = null;
  try {
    user = getUserByID(authorId);
    let followedCount = user.followedCount || 0;
    if (following) {
      followedCount += 1;
    } else {
      followedCount -= 1;
      if (followedCount < 0) {
        followedCount = 0;
      }
    }
    user.followedCount = followedCount;
    await registerUser(user);
  } catch (err) {
    console.info('updateFollowedCounter err', err);
  }
  return user;
}
