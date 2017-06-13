/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLSchema as Schema } from 'graphql';
import Query from './types/QueryType.js';
// import Mutation from './mutations';
// import me from './queries/me';
// import news from './queries/news';
// import PageType from './types/PageType';
// import UserType from './types/UserType';
// import { getPageList } from './queries/googleDatastore/pageQueries';
// import { getUserList } from './queries/googleDatastore/userQueries';

const schema = new Schema({
  query: Query,
  // mutation: Mutation,
  // query: new ObjectType({
  //   name: 'Query',
  //   fields: () => ({
  //     node: nodeField,
  //     users: {
  //       type: new List(UserType),
  //       resolve: async args => {
  //         return await getUserList();
  //       }
  //     },
  //     pages: {
  //       type: new List(PageType),
  //       resolve: async args => {
  //         return await getPageList();
  //       }
  //     }
  //   })
  // })
});

export default schema;
