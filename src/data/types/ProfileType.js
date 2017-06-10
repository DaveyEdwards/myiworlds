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

import ++ from './PageType';

import {
  getPagesBy_id,
  getPageBy_id
} from '../queries/googleDatastore/Page';

import { nodeInterface } from '../nodeInterface';

const ProfileType = new ObjectType({
  name: 'Profile',
  description: 'What a Account uses to interact with pages. It is also a subdomain myiworlds.com/profile/profileName',
  fields: () => ({
    id: globalIdField('Profile', profile => profile._id),
    _id: { type: new NonNull( ID ) },
    profileName: { type: StringType },
    account: {
      type: AccountType,
      description: 'The account that owns this profile.',
      resolve: ( profile ) => {
        if ( profile.account ) {
          return getAccountBy_id( profile.account );
        }
      }
    },
    styles: {
      type: new List( PageType ),
      description: 'A users chosen styles when viewing through this profile',
      resolve: async (profile, args, { loaders }) => {
        if ( profile.styles ) {
          return await loaders.pageLoader.loadMany( profile.styles );
        }
      }
    },
    home: {
      type: PageType,
      description: 'The homepage of myiworlds.com/profile/profileName.',
      resolve: ( page ) => {
        if ( page.page ) {
          return getPageBy_id( page.page );
        }
      }
    },
    pagesCreated: {
      type: new List( PageType ),
      description: 'All pages created by this profile',
      resolve: async (profile, args, { loaders }) => {
        if ( profile.pagesCreated ) {
          return await loaders.pageLoader.loadMany( profile.pagesCreated );
        }
      }
    },
    following: {
      type: new List( PageType ),
      description: 'All pages this profile follows',
      resolve: async (profile, args, { loaders }) => {
        if ( profile.following ) {
          return await loaders.pageLoader.loadMany( profile.following );
        }
      }
    },
  }),
  interfaces: [nodeInterface],
});

export default ProfileType;
