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
import { getThingsBy_id, getThingBy_id } from '../queries/gcpDatastore/thingQueries';
import { nodeInterface } from './nodeInterface';
import ThingType from './ThingType';

const PersonType = new ObjectType({
  name: 'Person',
  description: 'Person who can create and interact with things.',
  fields: () => ({
    id: globalIdField('Person', person => person._id),
    _id: { type: new NonNull(ID) },
    username: { type: new NonNull(StringType) },
    email: { type: new NonNull(StringType) },
    emailConfirmed: { type: BooleanType },
    styles: {
      type: new List(ThingType),
      description: 'Styles a person wants to override specific content types',
      resolve: async (person, args, { loaders }) => {
        if (person.styles) {
          return await loaders.thingLoader.loadMany(person.styles);
        }
      },
    },
    home: {
      type: ThingType,
      description: 'The homething of myiworlds.com/person/personName.',
      resolve: (person) => {
        if (person.thing) {
          return getThingBy_id(person.thing);
        }
      },
    },
    thingsCreated: {
      type: ThingType,
      description:
        'All things created by this person, they are not stored on the person object but its own node in the graph to prevent to much data.',
      resolve: (person) => {
        if (person.thing) {
          return getThingBy_id(person.thing);
        }
      },
    },
  }),
  interfaces: [nodeInterface],
});

export default PersonType;
