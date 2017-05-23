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

import {
  globalIdField,
  toGlobalId
} from 'graphql-relay';

import UserType from './UserType';
// import pages from '../queries/PagesByIDQuery';
// import { getPages } from '../services/googleDatastore/Page';

const PageType = new ObjectType({
  name: 'Page',
  description: 'Everything you see can be placed inside a page.',
  fields: {
    _id: { type: new NonNull(ID) },
    path: { type: StringType },
    public: { type: BooleanType },
    // viewers: { type: new List(UserType) },
    type: { type: StringType },
    // tags: { type: new List(PageType) },
    order: { type: NumberType },
    title: { type: StringType },
    subtitle: { type: StringType },
    description: { type: StringType },
    // image: { type: StringType, resolve: page => toGlobalId('Page', page.image) },
    // creators: { type: new List(UserType) },
    created: { type: StringType },
    lastUpdated: { type: StringType },
    value: { type: StringType },
    blob: { type: StringType },
    // page: { type: StringType, resolve: page => toGlobalId('Page', page.page) },
    // pages,
  },
});

export default PageType;
