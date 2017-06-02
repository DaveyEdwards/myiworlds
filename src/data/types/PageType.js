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

import UserType from './UserType';

import {
  getPagesBy_id,
  getPageBy_id
} from '../queries/googleDatastore/Page';

import { nodeInterface } from '../nodeInterface';

// import PageConnection from './connections/PageConnection';

const PageType = new ObjectType({
  name: 'Page',
  description: 'Everything you see can be placed inside a page.',
  // isTypeOf: object => object instanceof Page,
  fields: () => ({
    id: globalIdField('Page', page => page._id),
    _id: {
      type: new NonNull( ID ),
      description: 'A unique id used to instantly locate this page inside the database'
    },
    path: {
      type: StringType,
      description: 'A direct path (url) to this page'
    },
    public: { type: BooleanType },
    viewers: {
      description: 'Profiles that can view this page',
      type: new List( PageType ),
      resolve: ( page ) => {
        if ( page.viewers ) {
          return getPagesBy_id( page.viewers );
        }
      }
    },
    type: { type: StringType },
    // tags: {
    //   type: PageConnection,
    //   description: 'All tags related to this page',
    //   args: connectionArgs,
    //   resolve: async ( page, args ) => {
    //     if ( page.tags ) {
    //       let tags = await getPagesBy_id( page.tags );
    //       let connection = connectionFromArray(tags, args);
    //       return connection;
    //     }
    //   }
    // },
    order: {
      type: NumberType,
      description: 'The order number this is to display in a list'
    },
    title: { type: StringType },
    subtitle: { type: StringType },
    description: { type: StringType },
    // image: {
    //   type: new List( PageType ),
    //   resolve: ( page ) => {
    //     if ( page.pageList ) {
    //       return getPagesBy_id( page.pageList );
    //     }
    //   },
    // },
    creator: {
      type: PageType,
      resolve: ( page ) => {
        if ( page.creator ) {
          return getPageBy_id( page.creator );
        }
      }
    },
    editors: {
      type: PageConnection,
      args: connectionArgs,
      resolve: async ( page, args ) => {
        if ( page.editors ) {
          let editors = await getPagesBy_id( page.editors );
          let connection = connectionFromArray(editors, args);
          return connection;
        }
      }
    },
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
      resolve: async ( page ) => {
        if ( page.pageList ) {
          let pageList = await getPagesBy_id( page.pageList );
          return pageList;
        }
      },
    },
    pageEdge: {
      type: PageConnection,
      args: connectionArgs,
      resolve: async ( page, args ) => {
        if ( page.pageEdge ) {
          let pageEdge = await getPagesBy_id( page.pageEdge );
          let connection = connectionFromArray(pageEdge, args);
          return connection;
        }
      }
    },
  }),
  interfaces: [nodeInterface],
});

const { connectionType: PageConnection } = connectionDefinitions({
  name: 'Page',
  nodeType: PageType,
});

export default PageType;
