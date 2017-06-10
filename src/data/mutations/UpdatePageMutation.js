import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
  toGlobalId,
} from 'graphql-relay';

const UpdatePageMutation = mutationWithClientMutationId({
  name: 'UpdatePage',
  inputFields: {
    _id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) },
  },
  outputFields: {
    page: {
      type: PageType,
      resolve: ({_id}) => getPage(_id),
    },
  },
  mutateAndGetPayload: ({id, text}) => {
    const localPageId = fromGlobalId(id).id;
    editPage(localPageId, text);
    return {localPageId};
  },
});
