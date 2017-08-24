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
  GraphQLList as List,
} from 'graphql';
import { globalIdField } from 'graphql-relay';
import {
  getCircleBy_id, // eslint-disable-line camelcase
  getCircleByPath,
} from '../GoogleCloudPlatform/StorageAndDatabases/Datastore/Circle/Queries/';
import { nodeInterface } from './nodeInterface';
import CircleType from './CircleType';

const ViewerType = new ObjectType({
  name: 'Viewer',
  description: 'Viewer who can create and interact with circles.',
  fields: () => ({
    id: globalIdField('Viewer', viewer => viewer._id),
    _id: { type: new NonNull(ID) },
    username: { type: new NonNull(StringType) },
    email: { type: new NonNull(StringType) },
    emailConfirmed: { type: BooleanType },
    styles: {
      type: new List(CircleType),
      description: 'Styles a viewer wants to override specific content types',
      resolve: async (viewer, args, { loaders }) => {
        if (viewer.styles) {
          return await loaders.circleLoader.loadMany(viewer.styles);
        }
      },
    },
    home: {
      type: CircleType,
      description: 'The home circle of myiworlds.com/viewer/viewerName.',
      resolve: (viewer) => {
        if (viewer.circle) {
          return getCircleBy_id(viewer.circle);
        }
      },
    },
    circleByPath: {
      type: CircleType,
      args: {
        path: { type: StringType },
      },
      resolve: (query, { path }) => getCircleByPath(path),
    },
    // circlesCreated: {
    // 	type: CircleType,
    // 	description:
    // 'All circles created by this viewer, they are not stored on the viewer object but its
    // own node in the graph to prevent to much data.',
    // 	resolve: (viewer) => {
    // 		if (viewer.circle) {
    // 			return getCirclesBy_id(viewer.circle);
    // 		}
    // 	},
    // },
    // navigation: {
    // 	type: CircleType,
    // 	description:
    // 	'The viewers navigation items, these can be any circle they want, all stored in a seperate list.',
    // 	resolve: (viewer) => {
    // 		if (viewer.circle) {
    // 			return getCirclesBy_id(viewer.circle);
    // 		}
    // 	},
    // },
  }),
  interfaces: [nodeInterface],
});

export default ViewerType;
