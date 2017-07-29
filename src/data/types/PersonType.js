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
import { globalIdField } from 'graphql-relay';
import { getN0desBy_id, getN0deBy_id } from '../queries/gcpDatastore/n0deQueries';
import { nodeInterface } from './nodeInterface';
import N0deType from './N0deType';

const PersonType = new ObjectType({
	name: 'Person',
	description: 'Person who can create and interact with n0des.',
	fields: () => ({
		id: globalIdField('Person', person => person._id),
		_id: { type: new NonNull(ID) },
		username: { type: new NonNull(StringType) },
		email: { type: new NonNull(StringType) },
		emailConfirmed: { type: BooleanType },
		styles: {
			type: new List(N0deType),
			description: 'Styles a person wants to override specific content types',
			resolve: async (person, args, { loaders }) => {
				if (person.styles) {
					return await loaders.n0deLoader.loadMany(person.styles);
				}
			},
		},
		home: {
			type: N0deType,
			description: 'The homen0de of myiworlds.com/person/personName.',
			resolve: (person) => {
				if (person.n0de) {
					return getN0deBy_id(person.n0de);
				}
			},
		},
		// n0desCreated: {
		// 	type: N0deType,
		// 	description:
		// 	'All n0des created by this person, they are not stored on the person object but its own node in the graph to prevent to much data.',
		// 	resolve: (person) => {
		// 		if (person.n0de) {
		// 			return getN0deBy_id(person.n0de);
		// 		}
		// 	},
		// },
	}),
	interfaces: [nodeInterface],
});

export default PersonType;
