/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
} from 'graphql';
import Query from './types/QueryType.js';
import Mutation from './mutations/Mutation.js';
// import me from './queries/me';
// import news from './queries/news';
// import PageType from './types/PageType';
// import { nodeField } from './nodeInterface';
// import { getPageList } from './queries/googleDatastore/pageQueries'


const schema = new Schema({
  query: Query,
  mutation: Mutation,
  // query: new ObjectType({
  //   name: 'Query',
  //   fields: () => ({
  //     node: nodeField,
  //     pages: {
  //       type: new List( PageType ),
  //       resolve: async (args) => {
  //         return await getPageList();
  //       }
  //     },
  //   }),
  // }),
});

export default schema;
