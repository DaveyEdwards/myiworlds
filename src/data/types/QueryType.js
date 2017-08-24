import { GraphQLObjectType as ObjectType } from 'graphql';
import { connectionArgs, connectionFromArray } from 'graphql-relay';
import { nodeField } from './nodeInterface';
import ViewerType from './ViewerType';
import { getLines } from '../GoogleCloudPlatform/StorageAndDatabases/Datastore/Circle/Queries';
import { getViewer } from '../GoogleCloudPlatform/StorageAndDatabases/Datastore/Viewer/Queries'; // eslint-disable-line camelcase
import CircleConnection from './connections/CircleConnection';
import me from '../queries/me';
import news from '../queries/news';

const QueryType = new ObjectType({
  name: 'QueryType',
  fields: () => ({
    me,
    news,

    viewer: {
      type: ViewerType,
      resolve: () => getViewer(),
    },

    // Just for testing, should never be used
    linesMany: {
      type: CircleConnection,
      args: connectionArgs,
      resolve: async (obj, args) => {
        const response = [];
        try {
          const linesMany = await getLines();
          const connection = connectionFromArray(linesMany, args);
          return connection;
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log('linesMany err', err);
        }
        return response;
      },
    },

    node: nodeField,
  }),
});

export default QueryType;
