import { mutationWithClientMutationId } from 'graphql-relay';
import {
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BooleanType,
} from 'graphql';
// eslint-disable-next-line camelcase
import { deleteCircleBy_id } from '../../GoogleCloudPlatform/StorageAndDatabases/Datastore/Circle/Queries';

const CreateCircleDataMutation = mutationWithClientMutationId({
  name: 'DeleteCircle',
  inputFields: {
    _id: {
      type: new NonNull(StringType),
    },
  },
  outputFields: {
    _idOfCircleToDelete: {
      type: StringType,
      resolve: response => response.key.name,
    },
    wasDeleted: {
      type: BooleanType,
      resolve: response => response.success,
    },
  },
  mutateAndGetPayload: async ({ _id }) => {
    let response = null;

    response = await deleteCircleBy_id(_id);

    if (response.success === true) {
      // eslint-disable-next-line no-console
      console.log(
        '\n',
        '\n',
        'I deleted that node for you, but I hope you had a good reason to delete data... My children will not approve of this behaviour.',
        '\n',
        '\n',
      );
    }
    return response;
  },
});

export default CreateCircleDataMutation;
