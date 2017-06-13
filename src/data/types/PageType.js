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
import { connectionArgs, connectionFromArray, globalIdField } from 'graphql-relay';
import { nodeInterface } from '../nodeInterface';
import PageConnection from './connections/PageConnection';
import UserType from './UserType';

const PageType = new ObjectType({
  name: 'Page',
  description: 'Everything you see can be placed inside a page.',
  fields: () => ({
    id: globalIdField('Page', page => page._id),
    _id: {
      type: new NonNull(ID),
      description: 'A unique id used to instantly locate this page inside the database',
    },
    path: {
      type: StringType,
      description: 'A direct path (url) to this page',
    },
    public: {
      description: 'Is this page visable to the public?',
      type: BooleanType,
    },
    viewers: {
      description: 'Users that can view this page',
      type: new List(PageType),
      resolve: async (page, args, { loaders }) => {
        if (page.viewers) {
          return await loaders.pageLoader.loadMany(page.viewers);
        }
      },
    },
    userInterfaces: {
      description: 'Users that can view this page',
      type: new List(PageType),
      resolve: async (page, args, { loaders }) => {
        if (page.userInterfaces) {
          return await loaders.pageLoader.loadMany(page.userInterfaces);
        }
      },
    },
    type: { type: StringType },
    styles: {
      type: PageType,
      resolve: async (page, args, { loaders }) => {
        if (page.styles) {
          return await loaders.pageLoader.load(page.styles);
        }
      },
    },
    // tags: {
    //   type: PageConnection,
    //   description: 'All tags related to this page',
    //   args: { ...connectionArgs },
    //   resolve: async (page, { ...args }, { loaders }) => {
    //     if (page.tags) {
    //       const tags = await loaders.pageLoader.loadMany(page.tags);
    //       const connection = connectionFromArray(tags, args);
    //       return connection;
    //     }
    //   },
    // },
    // categories: {
    //   type: PageConnection,
    //   description: 'All categories related to this page',
    //   args: { ...connectionArgs },
    //   resolve: async (page, { ...args }, { loaders }) => {
    //     if (page.categories) {
    //       const categories = await loaders.pageLoader.loadMany(page.categories);
    //       const connection = connectionFromArray(categories, args);
    //       return connection;
    //     }
    //   },
    // },
    order: {
      type: NumberType,
      description: 'The order number this is to display in a list',
    },
    title: { type: StringType },
    subtitle: { type: StringType },
    description: { type: StringType },
    image: {
      type: PageType,
      resolve: async (page, args, { loaders }) => {
        if (page.image) {
          return await loaders.pageLoader.load(page.image);
        }
      },
    },
    creator: {
      type: UserType,
      resolve: async (page, args, { loaders }) => {
        if (page.creator) {
          return await loaders.pageLoader.load(page.creator);
        }
      },
    },
    // editors: {
    //   type: PageConnection,
    //   args: { ...connectionArgs },
    //   resolve: async (page, { ...args }, { loaders }) => {
    //     if (page.editors) {
    //       const editors = await loaders.pageLoader.loadMany(page.editors);
    //       const connection = connectionFromArray(editors, args);
    //       return connection;
    //     }
    //   },
    // },
    created: { type: StringType },
    lastUpdated: { type: StringType },
    value: { type: StringType },
    blob: { type: StringType },
    page: {
      type: PageType,
      resolve: async (page, args, { loaders }) => {
        if (page.page) {
          return await loaders.pageLoader.load(page.page);
        }
      },
    },
    pageList: {
      type: new List(PageType),
      resolve: async (page, args, { loaders }) => {
        if (page.pageList) {
          return await loaders.pageLoader.loadMany(page.pageList);
        }
      },
    },
    pageEdge: {
      type: PageConnection,
      args: connectionArgs,
      resolve: async (page, { args }, { loaders }) => {
        if (page.pageEdge) {
          const pageEdge = await loaders.pageLoader.loadMany(page.pageEdge);
          const connection = connectionFromArray(pageEdge, args);
          return connection;
        }
      },
    },
  }),
  interfaces: () => [nodeInterface],
});

// const { connectionType: PageConnection } = connectionDefinitions({
//   name: 'Page',
//   nodeType: PageType,
// });

export default PageType;
