import {
  GraphQLObjectType as ObjectType,
  GraphQLList as List,
  GraphQLString as StringType,
} from 'graphql';
import { connectionArgs, connectionFromArray, connectionDefinitions } from 'graphql-relay';
import { nodeField } from '../nodeInterface';
import ThingType from './ThingType';
import PersonType from './PersonType';
import { getThingList, getThingByPath } from '../queries/gcpDatastore/thingQueries';
import { getPersonList, getPersonBy_id } from '../queries/gcpDatastore/personQueries';
import ThingConnection from './connections/ThingConnection';
import me from '../queries/me';
import news from '../queries/news';

const QueryType = new ObjectType({
  name: 'QueryType',
  fields: () => ({
    me,
    news,

    person: {
      type: PersonType,
      args: {
        _id: { type: StringType },
      },
      resolve: (query, { _id }) => getPersonBy_id(_id),
    },

    thingByPath: {
      type: ThingType,
      args: {
        path: { type: StringType },
      },
      resolve: (query, { path }) => getThingByPath(path),
    },

    persons: {
      type: new List(PersonType),
      resolve: async args => await getPersonList(),
    },

    things: {
      type: ThingConnection,
      args: connectionArgs,
      resolve: async (obj, args) => {
        const response = [];
        try {
          const thingEdge = await getThingList();
          const connection = connectionFromArray(thingEdge, args);
          return connection;
        } catch (err) {
          console.log('things err', err);
        }
        return response;
      },
    },

    node: nodeField,
  }),
});

export default QueryType;
