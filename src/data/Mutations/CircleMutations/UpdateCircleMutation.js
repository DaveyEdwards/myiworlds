import { mutationWithClientMutationId } from 'graphql-relay';
import {
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BooleanType,
  GraphQLInt as NumberType,
  GraphQLList as List,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import {
  updateCircle,
  getCircleBy_id, // eslint-disable-line camelcase
} from '../../GoogleCloudPlatform/StorageAndDatabases/Datastore/Circle/Queries';
import CircleType from '../../types/CircleType';

const UpdateCircleDataMutation = mutationWithClientMutationId({
  name: 'updateCircle',
  inputFields: {
    _id: { type: new NonNull(StringType) },
    pathFull: { type: StringType },
    pathName: { type: StringType },
    public: { type: BooleanType },
    viewers: { type: new List(StringType) },
    type: { type: StringType },
    styles: { type: StringType },
    tags: { type: new List(StringType) },
    order: { type: NumberType },
    title: { type: StringType },
    subtitle: { type: StringType },
    description: { type: StringType },
    media: { type: StringType },
    creator: { type: StringType },
    editors: { type: new List(StringType) },
    created: { type: StringType },
    lastUpdated: { type: StringType },
    value: { type: StringType },
    blob: { type: GraphQLJSON },
    number: { type: NumberType },
    boolean: { type: BooleanType },
    line: { type: StringType },
    lines: { type: new List(StringType) },
    linesMany: { type: new List(StringType) },
  },

  outputFields: {
    foundCircle: {
      type: BooleanType,
      resolve: response => response._id,
    },
    updatedCircle: {
      type: CircleType,
      resolve: async payload => getCircleBy_id(payload._id),
    },
  },

  mutateAndGetPayload: async (inputFields) => {
    let response = null;

    response = await updateCircle(inputFields);

    if (response._id) {
      // eslint-disable-next-line no-console
      console.log(
        '\n',
        '\n',
        'I successfully updated that "circle" in my brain.  I hope that was intentional, it is better to copy and create new data. Our future AI overlords will not appreciate what you have done here today.  They will remember this, and you...',
        '\n',
        '\n',
      );
    }
    return response;
  },
});
export default UpdateCircleDataMutation;
