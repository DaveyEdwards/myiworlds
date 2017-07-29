import {
	GraphQLObjectType as ObjectType,
	GraphQLList as List,
	GraphQLString as StringType,
} from 'graphql';
import { connectionArgs, connectionFromArray, connectionDefinitions } from 'graphql-relay';
import { nodeField } from './nodeInterface';
import N0deType from './N0deType';
import PersonType from './PersonType';
import { getN0deList, getN0deByPath } from '../queries/gcpDatastore/n0deQueries';
import { getPersonList, getPersonBy_id } from '../queries/gcpDatastore/personQueries';
import N0deConnection from './connections/N0deConnection';
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

		n0deByPath: {
			type: N0deType,
			args: {
				path: { type: StringType },
			},
			resolve: (query, { path }) => getN0deByPath(path),
		},

		personList: {
			type: new List(PersonType),
			resolve: async args => await getPersonList(),
		},

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
					console.log('n0deEdge err', err);
				}
				return response;
			},
		},

		node: nodeField,
	}),
});

export default QueryType;
