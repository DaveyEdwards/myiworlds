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
import PersonType from './PersonType';

const ThingType = new ObjectType({
  name: 'Thing',
  description: 'Everything you see can be placed inside a thing.',
  fields: () => ({
    id: globalIdField('Thing', thing => thing._id),
    _id: {
      type: new NonNull(ID),
      description: 'A unique id used to instantly locate this thing inside the database',
    },
    path: {
      type: StringType,
      description: 'A direct path (url) to this thing',
    },
    public: {
      description: 'Is this thing visable to the public?',
      type: BooleanType,
    },
    viewers: {
      description: 'Persons that can view this thing',
      type: new List(ThingType),
      resolve: async (thing, args, { loaders }) => {
        if (thing.viewers) {
          return await loaders.thingLoader.loadMany(thing.viewers);
        }
      },
    },
    type: { type: StringType },
    styles: {
      type: ThingType,
      resolve: async (thing, args, { loaders }) => {
        if (thing.styles) {
          return await loaders.thingLoader.load(thing.styles);
        }
      },
    },
    tags: {
      type: require('./connections/ThingConnection').default,
      description: 'All tags related to this thing',
      args: connectionArgs,
      resolve: async (thing, { ...args }, { loaders }) => {
        if (thing.tags) {
          const tags = await loaders.thingLoader.loadMany(thing.tags);
          const connection = connectionFromArray(tags, args);
          return connection;
        }
      },
    },
    categories: {
      type: require('./connections/ThingConnection').default,
      description: 'All categories related to this thing',
      args: connectionArgs,
      resolve: async (thing, { ...args }, { loaders }) => {
        if (thing.categories) {
          const categories = await loaders.thingLoader.loadMany(thing.categories);
          const connection = connectionFromArray(categories, args);
          return connection;
        }
      },
    },
    order: {
      type: NumberType,
      description: 'The order number this is to display in a list',
    },
    title: { type: StringType },
    subtitle: { type: StringType },
    description: { type: StringType },
    media: {
      type: ThingType,
      resolve: async (thing, args, { loaders }) => {
        if (thing.media) {
          return await loaders.thingLoader.load(thing.media);
        }
      },
    },
    creator: {
      type: PersonType,
      resolve: async (thing, args, { loaders }) => {
        if (thing.creator) {
          return await loaders.thingLoader.load(thing.creator);
        }
      },
    },
    editors: {
      type: require('./connections/ThingConnection').default,
      args: connectionArgs,
      resolve: async (thing, { ...args }, { loaders }) => {
        if (thing.editors) {
          const editors = await loaders.thingLoader.loadMany(thing.editors);
          const connection = connectionFromArray(editors, args);
          return connection;
        }
      },
    },
    created: { type: StringType },
    lastUpdated: { type: StringType },
    value: { type: StringType },
    blob: { type: StringType },
    thing: {
      type: ThingType,
      resolve: async (thing, args, { loaders }) => {
        if (thing.thing) {
          return await loaders.thingLoader.load(thing.thing);
        }
      },
    },
    thingList: {
      type: new List(ThingType),
      resolve: async (thing, args, { loaders }) => {
        if (thing.thingList) {
          return await loaders.thingLoader.loadMany(thing.thingList);
        }
      },
    },
    thingEdge: {
      type: require('./connections/ThingConnection').default,
      args: connectionArgs,
      resolve: async (thing, { ...args }, { loaders }) => {
        if (thing.thingEdge) {
          const thingEdge = await loaders.thingLoader.loadMany(thing.thingEdge);
          const connection = connectionFromArray(thingEdge, args);
          return connection;
        }
      },
    },
  }),
  interfaces: [nodeInterface],
});

export default ThingType;
