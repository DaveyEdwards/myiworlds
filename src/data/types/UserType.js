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

import PageType from './PageType';

import { getPagesBy_id, getPageBy_id } from '../queries/googleDatastore/pageQueries';

import { nodeInterface } from '../nodeInterface';

const UserType = new ObjectType({
  name: 'User',
  description: 'User who can create and interact with pages.',
  fields: () => ({
    id: globalIdField('User', user => user._id),
    _id: { type: new NonNull(ID) },
    username: { type: new NonNull(StringType) },
    email: { type: new NonNull(StringType) },
    emailConfirmed: { type: BooleanType },
    styles: {
      type: new List(PageType),
      description: 'Styles a user wants to override specific content types',
      resolve: async (user, args, { loaders }) => {
        if (user.styles) {
          return await loaders.pageLoader.loadMany(user.styles);
        }
      },
    },
    home: {
      type: PageType,
      description: 'The homepage of myiworlds.com/user/userName.',
      resolve: (user) => {
        if (user.page) {
          return getPageBy_id(user.page);
        }
      },
    },
    pagesCreated: {
      type: PageType,
      description:
        'All pages created by this user, they are not stored on the user object but its own node in the graph to prevent to much data.',
      resolve: (user) => {
        if (user.page) {
          return getPageBy_id(user.page);
        }
      },
    },
  }),
  interfaces: () => [nodeInterface],
});

export default UserType;
