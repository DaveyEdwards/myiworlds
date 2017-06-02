import { nodeDefinitions } from 'graphql-relay';
import {
  getNode,
  getNodeType
} from './type-registry';

export const { nodeInterface, nodeField } = nodeDefinitions(getNode, getNodeType);
