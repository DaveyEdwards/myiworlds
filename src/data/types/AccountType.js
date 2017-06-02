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

const AccountType = new ObjectType({
  name: 'Account',
  description: 'Everything you see can be placed inside a page.',
  fields: () => ({
    id: globalIdField('Account', account => account._id),
    _id: { type: new NonNull( ID ) },
    email: { type: StringType },
    home: {
      type: PageType,
      description: 'A accounts home page, this is a actual person and not a company entity.',
      resolve: ( page ) => {
        if ( page.page ) {
          return getPageBy_id( page.page );
        }
      },
    },
    profiles: {
      type: PageConnection,
      description: 'Profiles under an account. This is for different accounts/companies you may wish to',
      args: connectionArgs,
      resolve: async ( page, args ) => {
        if ( page.pages ) {
          let pages = await getPagesBy_id( page.pages );
          let connection = connectionFromArray(pages, args);
          return connection;
        }
      }
    },
    pages: {
      type: PageConnection,
      description: 'All pages created by this account. Includes all sub Profiles created pages',
      args: connectionArgs,
      resolve: async ( page, args ) => {
        if ( page.pages ) {
          let pages = await getPagesBy_id( page.pages );
          let connection = connectionFromArray(pages, args);
          return connection;
        }
      }
    },
  }),
  interfaces: [nodeInterface],
});

export default AccountType;
