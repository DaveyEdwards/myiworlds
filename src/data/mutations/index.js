import { GraphQLObjectType as ObjectType } from 'graphql';

import createPageMutation from './createPageMutation';
import updatePageMutation from './updatePageMutation';
import deletePageMutation from './deletePageMutation';

const Mutation = new ObjectType({
  name: 'Mutation',
  fields: {
    createPage: createPageMutation,
    updatePage: updatePageMutation,
    deletePage: deletePageMutation,
  },
});

export default Mutation;
