/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLSchema as Schema } from 'graphql';

import Query from './types/QueryType';
import Mutation from './Mutations/N0deMutations/';

const schema = new Schema({
	query: Query,
	mutation: Mutation,
});

export default schema;
