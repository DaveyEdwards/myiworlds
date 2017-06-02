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
  // fromGlobalId,
  // globalIdField,
  // toGlobalId,
  //
  // connectionDefinitions,
  // connectionFromArray
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
  toGlobalId,
} from 'graphql-relay';

import UserType from './UserType';

import {
  getPagesBy_id,
  getPageBy_id
} from '../queries/googleDatastore/Page';

// import nodeField from '../schema';
import { nodeInterface } from '../nodeInterface';

const PageType = new ObjectType({
  name: 'Page',
  description: 'Everything you see can be placed inside a page.',
  fields: () => ({
    id: globalIdField('Page'),
    _id: {
      type: new NonNull( ID ) },
    path: { type: StringType },
    public: { type: BooleanType },
    // viewers: { type: new List(UserType) },
    type: { type: StringType },
    tags: {
      type: new List( PageType ),
      resolve: ( page ) => {
        if ( page.pageList ) {
          return getPagesBy_id( page.pageList );
        }
      }
    },
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
    page: {
      type: PageType,
      resolve: ( page ) => {
        if ( page.page ) {
          return getPageBy_id( page.page );
        }
      },
    },
    pageList: {
      type: new List( PageType ),
      resolve: ( page ) => {
        if ( page.pageList ) {
          return getPagesBy_id( page.pageList );
        }
      },
    },
    pageEdge: {
      type: PagesConnection,
      args: {
      ...connectionArgs,
      query: { type: StringType }
      },
      resolve: ( page, args ) => {
        if ( page.pageEdge ) {
            return connectionFromArray(getPagesBy_id( page.pageEdge ), args)
        }
      }
    },
  }),
  interfaces: [nodeInterface],
});

const {
  connectionType: PagesConnection,
  edgeType: GraphQLPageEdge,
} = connectionDefinitions({
  name: 'Page',
  nodeType: PageType,
});

export default PageType;
