import { mutationWithClientMutationId } from 'graphql-relay';
import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt,
} from 'graphql';
import { deleteEntity } from '../../GoogleCloudPlatform/StorageAndDatabases/Datastore/index';

const userId = 'viewer000000000000000000000000000001';

const DeleteCircleDataMutation = mutationWithClientMutationId({
  name: 'deleteCircle',

  inputFields: {
    _id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },

  outputFields: {
    message: {
      type: GraphQLString,
      resolve: response => response.message,
    },
    idToDelete: {
      type: GraphQLString,
      resolve: response => response.idToDelete,
    },
    wasDeleted: {
      type: GraphQLBoolean,
      resolve: response => response.wasDeleted,
    },
    numberOfClones: {
      type: GraphQLInt,
      resolve: response => response.numberOfClones,
    },
    clonesDeleted: {
      type: GraphQLBoolean,
      resolve: response => response.clonesDeleted,
    },
  },

  mutateAndGetPayload: async ({ _id }) => deleteEntity('Circles', _id, userId),
});

export default DeleteCircleDataMutation;
