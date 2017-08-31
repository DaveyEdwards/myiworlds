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

const CircleType = new ObjectType({
  name: 'Circle',
  description: 'Everycircle you see can be placed inside a circle.',
  fields: () => ({
    id: globalIdField('Circle', circle => circle._id),
    _id: {
      description: 'A unique id used to instantly locate this circle inside the database',
      type: ID,
    },
    pathFull: {
      description: 'The full path (after domain name) to this piece of content',
      type: StringType,
    },
    pathName: {
      type: StringType,
      description:
        'The name of this path without creator.  This allows shared viewers to edit the title, but not the root path.',
    },
    public: {
      description: 'Is this circle visable to the public?',
      type: BooleanType,
    },
    viewers: {
      description: 'Who is allowed to see this node?',
      type: new List(ViewerType),
      resolve: async (circle, args, { loaders }) => {
        if (circle.viewers) {
          return await loaders.viewerLoader.loadMany(circle.viewers);
        }
      },
    },
    type: {
      description:
        'The type of data this node is holding, it allows the frontend to choose the perfect component to show you.',
      type: new NonNull(StringType),
    },
    styles: {
      description: 'The styles of this piece of content.',
      type: CircleType,
      resolve: async (circle, args, { loaders }) => {
        if (circle.styles) {
          return await loaders.circleLoader.load(circle.styles);
        }
      },
    },
    tags: {
      description: 'All tags related to this circle',
      type: require('./connections/CircleConnection').default,
      args: connectionArgs,
      resolve: async (circle, { ...args }, { loaders }) => {
        if (circle.tags) {
          const tags = await loaders.circleLoader.loadMany(circle.tags);
          const connection = connectionFromArray(tags, args);
          return connection;
        }
      },
    },
    order: {
      description: 'The order number this is to display in a list',
      type: NumberType,
    },
    title: { type: StringType },
    subtitle: { type: StringType },
    description: { type: StringType },
    media: {
      description: 'A piece of media (image/gif/video) that helps identify this piece of content.',
      type: CircleType,
      resolve: async (circle, args, { loaders }) => {
        if (circle.media) {
          return await loaders.circleLoader.load(circle.media);
        }
      },
    },
    creator: {
      description: 'The viewer who created this piece of content',
      type: ViewerType,
      resolve: async (circle, args, { loaders }) => {
        if (circle.creator) {
          return await loaders.circleLoader.load(circle.creator);
        }
      },
    },
    editors: {
      description: 'Viewers that can view this circle',
      type: new List(ViewerType),
      resolve: async (circle, args, { loaders }) => {
        if (circle.viewers) {
          return await loaders.viewerLoader.loadMany(circle.viewers);
        }
      },
    },
    created: { type: StringType },
    lastUpdated: { type: StringType },
    value: {
      description: 'A string value you wish to store. (Any character)',
      type: StringType,
    },
    blob: {
      description: 'A JSON blob, allowing you to create complex pieces of content.',
      type: GraphQLJSON,
    },
    number: {
      description: 'A number type to store on this piece of content',
      type: NumberType,
    },
    boolean: {
      description: 'A boolean type to store on this piece of content',
      type: BooleanType,
    },
    line: {
      description:
        'When you want to point to a single circle type.  Normally used for changing a node but without actually changing it.',
      type: CircleType,
      resolve: async (circle, args, { loaders }) => {
        if (circle.line) {
          return await loaders.circleLoader.load(circle.circle);
        }
      },
    },
    lines: {
      description:
        "When you want to connect lots of Circles, but don't need pagination (used for TONS of results) ",
      type: new List(CircleType),
      resolve: async (circle, args, { loaders }) => {
        if (circle.lines) {
          return await loaders.circleLoader.loadMany(circle.lines);
        }
      },
    },
    linesMany: {
      description:
        'When you need to connect lots of Circles together, but you only want to show a certain amount at a time',
      type: require('./connections/CircleConnection').default, // eslint-disable-line global-require
      args: connectionArgs,
      resolve: async (circle, { ...args }, { loaders }) => {
        if (circle.linesMany) {
          const linesMany = await loaders.circleLoader.loadMany(circle.linesMany);
          const connection = connectionFromArray(linesMany, args);
          return connection;
        }
      },
    },
  }),
  interfaces: [nodeInterface],
});

export default CircleType;
