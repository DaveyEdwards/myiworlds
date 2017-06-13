import { nodeDefinitions } from 'graphql-relay';
import { getNode, getNodeType } from './type-registry';

export const { nodeInterface, nodeField } = nodeDefinitions(getNode, getNodeType);

// From: https://github.com/bondz/learn-graphql-relay/blob/47211fdec44ce4bb10f487bddfc7411e5690b894/src/types/connections.js
// import { fromGlobalId, nodeDefinitions } from 'graphql-relay';
//
// const { nodeInterface, nodeField } = nodeDefinitions(
//   (globalID) => {
//     const { type, id } = fromGlobalId(globalID);
//
//     // Log to NodeJS console the mapping from globalId/Node ID
//     // to actual object type and id
//     console.log('NodeDefinitions (globalId), id:', id);
//     console.log('NodeDefinitions (globalId), type:', type);
//   },
//   (obj) => {
//     console.log(obj);
//     return null;
//   },
// );
//
// export { nodeInterface, nodeField };
