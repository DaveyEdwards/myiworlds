import {
  GraphQLObjectType as ObjectType,
} from 'graphql';

import createPageMutation from './createPageMutation';
import editPageMutation from './editPageMutation';
import deletePageMutation from './deletePageMutation';

const Mutation = new ObjectType({
  name: 'Mutation',
  fields: {
    createPage: createPageMutation,
    editPage: editPageMutation,
    deletePage: deletePageMutation,
  },
});

export default Mutation;
