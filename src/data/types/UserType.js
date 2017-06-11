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
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  globalIdField,
  toGlobalId,
} from 'graphql-relay';

import PageType from './PageType';

import {
  getPagesBy_id,
  getPageBy_id
} from '../queries/googleDatastore/Page';

import { nodeInterface } from '../nodeInterface';

const UserType = new ObjectType({
  name: 'User',
  description: 'Everything you see can be placed inside a page.',
  fields: () => ({
    id: globalIdField('User', user => user._id),
    _id: { type: new NonNull( ID ) },
    email: { type: StringType },
    home: {
      type: PageType,
      description: 'A users home page, this is a actual person and not a company entity.',
      resolve: ( user ) => {
        if ( user.home ) {
          return getPageBy_id( user.home );
        }
      }
    },
    profiles: {
      type: new List( ProfileType ),
      resolve: async (user, args, { loaders }) => {
        if ( user.profiles ) {
          return await loaders.pageLoader.loadMany( user.profiles );
        }
      }
    },
    pagesCreated: {
      type: new List( PageType ),
      description: 'All pages created by this user',
      resolve: async (user, args, { loaders }) => {
        if ( user.pagesCreated ) {
          return await loaders.pageLoader.loadMany( user.pagesCreated );
        }
      }
    },
  }),
  interfaces: [nodeInterface],
});

export default UserType;
