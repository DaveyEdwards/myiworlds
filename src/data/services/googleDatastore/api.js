import { datastore } from 'google-cloud';

const dataStoreClient = datastore({
  projectId: 'myiworlds-164603',
  keyFilename: './src/google_api_service_key.json'
});

export async function save(item) {
  let ret = null;
  try {
    const key = dataStoreClient.key(item.key);
    ret = await dataStoreClient.save({ key, data: item.data });
  } catch (err) {
    console.log('save err', err);
  }
  return ret;
}

export async function batchSave(items) {
  let ret = null;
  try {
    const entities = items.map((item) => {
      const key = dataStoreClient.key(item.key);
      const data = item.data;
      return { key, data };
    });
    ret = await dataStoreClient.upsert(entities);
  } catch (err) {
    console.log('batchSave err', err);
  }
  return ret;
}

export async function lookupEntities(_keys) {
  let ret = [];
  try {
    if (_keys.length > 0) {
      const keys = _keys.map(item => dataStoreClient.key(item));
      const result = await dataStoreClient.get(keys);
      ret = result[0];
    }
  } catch (err) {
    console.log('lookupEntities err', _keys, err);
  }
  return ret;
}

export async function getEntity(key) {
  let ret = null;
  try {
    const result = await dataStoreClient.get(dataStoreClient.key(key));
    ret = result[0];
  } catch (err) {
    console.log('getEntity err', err);
  }
  return ret;
}

export async function deleteEntities(_keys) {
  let ret = null;
  try {
    const keys = _keys.map(item => dataStoreClient.key(item));
    ret = await dataStoreClient.delete(keys);
  } catch (err) {
    console.log('deleteEntities err', err);
  }
  return ret;
}

export async function runQuery(namespace, filters, offset = -1, limit) {
  let ret = [];
  try {
    let query = dataStoreClient.createQuery(namespace);
    filters.forEach((item) => {
      query = query.filter(item.fieldName, item.condition, item.value);
    });
    if (offset !== -1 && limit > 0) {
      query = query.limit(limit).offset(offset);
    }
    ret = await dataStoreClient.runQuery(query);
    ret = ret[0];
  } catch (err) {
    console.log('runQuery err', namespace, filters, err);
  }
  return ret;
}

export async function getCountWithQuery(namespace, filters) {
  let ret = 0;
  try {
    let query = dataStoreClient.createQuery(namespace);
    filters.forEach((item) => {
      query = query.filter(item.fieldName, item.condition, item.value);
    });
    let flagRunning = true;
    let offset = 0;
    const limit = 512;
    console.log('getCountWithQuery', filters);
    while (flagRunning) {
      query = query.limit(limit).offset(offset);
      const result = await dataStoreClient.runQuery(query);
      const entities = result[0];
      const info = result[1];
      if (info.moreResults !== datastore.NO_MORE_RESULTS) {
        offset += limit;
      } else {
        flagRunning = false;
      }
      ret += entities.length;
    }
  } catch (err) {
    console.log('runQuery err', namespace, filters, err);
  }
  return ret;
}
export async function getCount(namespace) {
  let ret = 0;
  try {
    let query = dataStoreClient.createQuery('__Stat_Kind__');
    query = query.filter('kind_name', '=', namespace);
    const result = await dataStoreClient.runQuery(query);
    if (result.length > 0) {
      ret = result[0][0].count;
    }
  } catch (err) {
    console.log('runQuery err', namespace, err);
  }
  return ret;
}
