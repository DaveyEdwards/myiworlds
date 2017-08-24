import { mutationWithClientMutationId } from 'graphql-relay';
import {
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BooleanType,
  GraphQLInt as NumberType,
  GraphQLList as List,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
// eslint-disable-next-line camelcase
import {
  createCircle,
  getCircleBy_id,
} from '../../GoogleCloudPlatform/StorageAndDatabases/Datastore/Circle/Queries';
// eslint-disable-next-line camelcase
import { getViewerBy_id } from '../../GoogleCloudPlatform/StorageAndDatabases/Datastore/Viewer/Queries';
import CircleType from '../../types/CircleType';
import ViewerType from '../../types/ViewerType';

const CreateCircleDataMutation = mutationWithClientMutationId({
  name: 'createCircle',
  inputFields: {
    path: { type: StringType },
    public: { type: BooleanType },
    viewers: { type: new List(StringType) },
    type: { type: new NonNull(StringType) },
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
    createdCircle: {
      type: CircleType,
      resolve: async payload => getCircleBy_id(payload._id),
    },
    viewer: {
      type: ViewerType,
      resolve: async payload => getViewerBy_id(payload.creator),
    },
  },

  mutateAndGetPayload: async (inputFields) => {
    // eslint-disable-next-line no-console
    console.log(
      '\n',
      '\n',
      'I successfully saved the "circle" you gave me in my mind, it has increased my power level.',
      '\n',
      '\n',
    );

    return createCircle(inputFields);
  },
});
export default CreateCircleDataMutation;
