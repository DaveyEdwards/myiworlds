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
import GraphQLJSON from 'graphql-type-json';
import { nodeInterface } from './nodeInterface';
import ViewerType from './ViewerType';

const userId = 'viewer000000000000000000000000000001';

const CircleType = new ObjectType({
  name: 'Circle',
  description: 'Everycircle you see can be placed inside a circle.',
  interfaces: [nodeInterface],

  fields: () => ({
    id: globalIdField('Circle', circle => circle._id),
    _id: {
      description: 'A unique id used to instantly locate this circle inside the database',
      type: ID,
    },
    ui: {
      description: 'If a user interface is not set.',
      type: CircleType,
      resolve: async (circle, args, { loaders }) => {
        if (circle.rating) {
          return loaders.pageLoader.load(circle.ui);
        }
        return null;
      },
    },
    slug: {
      description: 'The full slug (after domain name) to this piece of content',
      type: StringType,
    },
    slugName: {
      type: StringType,
      description:
        'The name of this slug without creators name before it. This allows shared viewers to edit the title, but not the root path.  This is stored incase the creators name changes',
    },
    public: {
      description: 'Is this circle visable to the public?',
      type: BooleanType,
    },
    viewers: {
      description: 'Who is allowed to see this node?',
      type: new List(ViewerType),
      resolve: (circle, args, { loaders }) => loaders.pageLoader.loadMany(
        circle.viewers,
      ),
    },
    type: {
      description:
        'The type of data this node is holding, it allows the frontend to choose the perfect component to show you.',
      type: new NonNull(StringType),
    },
    rating: {
      type: CircleType,
      resolve: async (circle, args, { loaders }) => {
        if (circle.rating) {
          return loaders.pageLoader.load(circle.rating);
        }
        return null;
      },
    },
    styles: {
      type: new List(CircleType),
      resolve: (circle, args, { loaders }) => loaders.pageLoader.loadMany(circle.styles),
    },
    tags: {
      type: new List(CircleType),
      resolve: (circle, args, { loaders }) => loaders.pageLoader.loadMany(circle.tags),
    },
    title: { type: StringType },
    subtitle: { type: StringType },
    description: { type: StringType },
    media: {
      description: 'A piece of media (image/gif/video) that helps identify this piece of content.',
      type: CircleType,
      resolve: async (circle, args, { loaders }) => {
        if (circle.media) {
          return loaders.pageLoader.load(circle.media);
        }
        return null;
      },
    },
    creator: {
      description: 'The viewer who created this piece of content',
      type: ViewerType,
      resolve: (circle, args, { loaders }) => loaders.pageLoader.load(circle.creator),
    },
    editors: {
      description: 'Viewers that can edit this circle',
      type: new List(ViewerType),
      resolve: async (circle, args, { loaders }) => {
        if (circle.editors) {
          return loaders.viewerLoader.loadMany(circle.editors);
        }
        return null;
      },
    },
    dateCreated: { type: StringType },
    dateUpdated: { type: StringType },
    string: { type: StringType },
    blob: { type: GraphQLJSON },
    number: { type: NumberType },
    boolean: { type: BooleanType },
    line: {
      description:
        'When you want to point to a single circle type.  Normally used for changing a node but without actually changing it.',
      type: CircleType,
      resolve: (circle, args, { loaders }) => {
        if (circle.array) {
          return loaders.pageLoader.load(circle.line);
        }
        return null;
      },
    },
    lines: {
      description:
        "When you want to connect lots of Circles, but don't need pagination (used for TONS of results) ",
      type: new List(CircleType),
      resolve: (circle, args, { loaders }) => {
        if (circle.array) {
          return loaders.pageLoader.loadMany(circle.lines);
        }
        return null;
      },
    },
    linesMany: {
      description:
        'When you need to connect lots of Circles together, but you only want to show a certain amount at a time',
      type: require('./connections/CircleConnection').default, // eslint-disable-line global-require
      args: connectionArgs,
      resolve: async (circle, { ...args }, { loaders }) => {
        if (circle.array) {
          const linesMany = loaders.pageLoader.loadMany(circle.linesMany);
          const connection = connectionFromArray(linesMany, args);
          return connection;
        }
        return null;
      },
    },
  }),
});

export default CircleType;
