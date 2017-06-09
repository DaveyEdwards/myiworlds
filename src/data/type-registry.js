import { fromGlobalId } from 'graphql-relay';
require('babel-polyfill');

const types = {};

export const registerType = (model, type, lookupFn) => {
  types[type.name] = { model, type, lookupFn };
};

export const getNode = async (globalId) => {
  const { type: typeName, id } = fromGlobalId(globalId);
  console.log('getNode', globalId, typeName, id);

  if (types[typeName]) {
    const object1 = await types[typeName].lookupFn(id);
    const Class = types[typeName].model;
    // let result  = Object.create(types[typeName].model, object1);
    const result = new Class(object1);
    console.log('getNode result', result);
    return result;
  }
  return null;
};

export const getNodeType = (obj) => {
  const keys = Object.keys(types);
  let ret = null;
  keys.map((typeName) => {
    if (obj instanceof types[typeName].model) {
      ret = types[typeName].type;
    }
    return true;
  });
  return ret;
};
