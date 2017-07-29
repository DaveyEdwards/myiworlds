/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
	GraphQLObjectType as ObjectType,
	GraphQLID as ID,
	GraphQLString as StringType,
	GraphQLNonNull as NonNull,
	GraphQLBoolean as BooleanType,
	GraphQLInt as NumberType,
	GraphQLList as List,
} from 'graphql';
import { connectionArgs, connectionFromArray, globalIdField } from 'graphql-relay';
import { nodeInterface } from './nodeInterface';
import PersonType from './PersonType';

const N0deType = new ObjectType({
	name: 'N0de',
	description: 'Everyn0de you see can be placed inside a n0de.',
	fields: () => ({
		id: globalIdField('N0de', n0de => n0de._id),
		_id: {
			type: new NonNull(ID),
			description: 'A unique id used to instantly locate this n0de inside the database',
		},
		path: {
			type: StringType,
			description: 'A direct path (url) to this n0de',
		},
		public: {
			description: 'Is this n0de visable to the public?',
			type: BooleanType,
		},
		viewers: {
			description: 'Persons that can view this n0de',
			type: new List(PersonType),
			resolve: async (n0de, args, { loaders }) => {
				if (n0de.viewers) {
					return await loaders.n0deLoader.loadMany(n0de.viewers);
				}
			},
		},
		type: { type: StringType },
		styles: {
			type: N0deType,
			resolve: async (n0de, args, { loaders }) => {
				if (n0de.styles) {
					return await loaders.n0deLoader.load(n0de.styles);
				}
			},
		},
		tags: {
			type: require('./connections/N0deConnection').default,
			description: 'All tags related to this n0de',
			args: connectionArgs,
			resolve: async (n0de, { ...args }, { loaders }) => {
				if (n0de.tags) {
					const tags = await loaders.n0deLoader.loadMany(n0de.tags);
					const connection = connectionFromArray(tags, args);
					return connection;
				}
			},
		},
		categories: {
			type: require('./connections/N0deConnection').default,
			description: 'All categories related to this n0de',
			args: connectionArgs,
			resolve: async (n0de, { ...args }, { loaders }) => {
				if (n0de.categories) {
					const categories = await loaders.n0deLoader.loadMany(n0de.categories);
					const connection = connectionFromArray(categories, args);
					return connection;
				}
			},
		},
		order: {
			type: NumberType,
			description: 'The order number this is to display in a list',
		},
		title: { type: StringType },
		subtitle: { type: StringType },
		description: { type: StringType },
		media: {
			type: N0deType,
			resolve: async (n0de, args, { loaders }) => {
				if (n0de.media) {
					return await loaders.n0deLoader.load(n0de.media);
				}
			},
		},
		creator: {
			type: PersonType,
			resolve: async (n0de, args, { loaders }) => {
				if (n0de.creator) {
					return await loaders.n0deLoader.load(n0de.creator);
				}
			},
		},
		editors: {
			description: 'Persons that can view this n0de',
			type: new List(PersonType),
			resolve: async (n0de, args, { loaders }) => {
				if (n0de.viewers) {
					return await loaders.n0deLoader.loadMany(n0de.viewers);
				}
			},
		},
		created: { type: StringType },
		lastUpdated: { type: StringType },
		value: { type: StringType },
		blob: { type: StringType },
		n0de: {
			type: N0deType,
			resolve: async (n0de, args, { loaders }) => {
				if (n0de.n0de) {
					return await loaders.n0deLoader.load(n0de.n0de);
				}
			},
		},
		n0deList: {
			type: new List(N0deType),
			resolve: async (n0de, args, { loaders }) => {
				if (n0de.n0deList) {
					return await loaders.n0deLoader.loadMany(n0de.n0deList);
				}
			},
		},
		n0deEdge: {
			type: require('./connections/N0deConnection').default,
			args: connectionArgs,
			resolve: async (n0de, { ...args }, { loaders }) => {
				if (n0de.n0deEdge) {
					const n0deEdge = await loaders.n0deLoader.loadMany(n0de.n0deEdge);
					const connection = connectionFromArray(n0deEdge, args);
					return connection;
				}
			},
		},
	}),
	interfaces: [nodeInterface],
});

export default N0deType;
