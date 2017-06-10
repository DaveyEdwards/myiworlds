import {
  GraphQLObjectType as ObjectType,
} from 'graphql';

import CreatePageMutation from './CreatePageMutation';
import EditPageMutation from './EditPageMutation';
import DeletePageMutation from './DeletePageMutation';

const Mutation = new ObjectType({
  name: 'Mutation',
  fields: {
    createPage: CreatePageMutation,
    editPage: EditPageMutation,
    deletePage: DeletePageMutation,
  },
});

export default Mutation;
