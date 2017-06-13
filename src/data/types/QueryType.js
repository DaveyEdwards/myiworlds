import {
  GraphQLObjectType as ObjectType,
  GraphQLList as List,
  GraphQLString as StringType,
} from 'graphql';
import { connectionArgs, connectionFromArray, connectionDefinitions } from 'graphql-relay';
import { nodeField } from '../nodeInterface';
import PageType from './PageType';
import UserType from './UserType';
import { getPageList, getPageByPath } from '../queries/googleDatastore/pageQueries';
import { getUserList, getUserBy_id } from '../queries/googleDatastore/userQueries';
import PageConnection from './connections/PageConnection';

const QueryType = new ObjectType({
  name: 'QueryType',
  fields: () => ({
    user: {
      type: UserType,
      args: {
        _id: { type: StringType },
      },
      resolve: (query, { _id }) => getUserBy_id(_id),
    },
    pageByPath: {
      type: PageType,
      args: {
        path: { type: StringType },
      },
      resolve: (query, { path }) => getPageByPath(path),
    },
    users: {
      type: new List(UserType),
      resolve: async args => await getUserList(),
    },
    pages: {
      type: PageConnection,
      args: connectionArgs,
      resolve: async (obj, args) => {
        const response = [];
        try {
          const pageEdge = await getPageList();
          const connection = connectionFromArray(pageEdge, args);
          return connection;
        } catch (err) {
          console.log('pages err', err);
        }
        return response;
      },
    },
    node: nodeField,
  }),
});

// const { connectionType: PageConnection } = connectionDefinitions({
//   name: 'Page',
//   nodeType: PageType,
// });

export default QueryType;
