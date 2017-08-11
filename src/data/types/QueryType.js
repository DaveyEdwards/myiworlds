import { GraphQLObjectType as ObjectType } from 'graphql';
import { connectionArgs, connectionFromArray } from 'graphql-relay';
import { nodeField } from './nodeInterface';
import PersonType from './PersonType';
import { getN0deList } from '../GoogleCloudPlatform/StorageAndDatabases/Datastore/N0de/Queries';
import { getViewer } from '../GoogleCloudPlatform/StorageAndDatabases/Datastore/Person/Queries'; // eslint-disable-line camelcase
import N0deConnection from './connections/N0deConnection';
import me from '../queries/me';
import news from '../queries/news';

const QueryType = new ObjectType({
  name: 'QueryType',
  fields: () => ({
    me,
    news,

    viewer: {
      type: PersonType,
      resolve: () => getViewer(),
    },

    // Just for testing, should never be used
    n0deEdge: {
      type: N0deConnection,
      args: connectionArgs,
      resolve: async (obj, args) => {
        const response = [];
        try {
          const n0deEdge = await getN0deList();
          const connection = connectionFromArray(n0deEdge, args);
          return connection;
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log('n0deEdge err', err);
        }
        return response;
      },
    },

    node: nodeField,
  }),
});

export default QueryType;
