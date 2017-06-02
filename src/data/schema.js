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
  GraphQLObjectType as ObjectType,
} from 'graphql';

import me from './queries/me';
import news from './queries/news';
import pages from './queries/PagesByIDQuery';
import pageType from './types/PageType';

import {
  fromGlobalId,
  nodeDefinitions,
} from 'graphql-relay';

import {
  getPageBy_id
} from './queries/googleDatastore/Page';

import { nodeField } from './nodeInterface';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: () => ({
      node: nodeField,
      me,
      news,
      pages
    }),
  }),
});

export default schema;
