import { nodeDefinitions, fromGlobalId } from 'graphql-relay';

require('babel-polyfill');

const types = {};

const registerType = (model, type, lookupFn) => {
  types[type.name] = { model, type, lookupFn };
};

const getNode = async (globalId) => {
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

const getNodeType = (obj) => {
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

export const { nodeInterface, nodeField } = nodeDefinitions(getNode, getNodeType);
