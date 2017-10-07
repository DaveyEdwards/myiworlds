import { GraphQLObjectType as ObjectType } from 'graphql';
import { connectionArgs, connectionFromArray } from 'graphql-relay';
import { nodeField } from './nodeInterface';
import ViewerType from './ViewerType';
import { getLines } from '../GoogleCloudPlatform/StorageAndDatabases/Datastore/Circle/Queries';
import { getViewer } from '../GoogleCloudPlatform/StorageAndDatabases/Datastore/Viewer/Queries'; // eslint-disable-line camelcase
import getEntityByKey from '../GoogleCloudPlatform/StorageAndDatabases/Datastore/getEntityByKey';
import CircleConnection from './connections/CircleConnection';
import CircleType from './CircleType';
import me from '../queries/me';
import news from '../queries/news';

const QueryType = new ObjectType({
  name: 'QueryType',
  fields: () => ({
    node: nodeField,

    me,
    news,

    viewer: {
      type: ViewerType,
      resolve: () => getViewer(),
    },

    entity: {
      type: CircleType,
      resolve: () =>
        getEntityByKey(
          'Page',
          '12c4d890-a324-11e7-b81b-fd54dc129351',
          'viewer000000000000000000000000000001',
        ),
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
  }),
});

export default QueryType;
