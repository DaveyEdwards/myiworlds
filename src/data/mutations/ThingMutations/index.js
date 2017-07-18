import { GraphQLObjectType as ObjectType } from 'graphql';

import CreateThingMutation from './CreateThingMutation';
import UpdateThingMutation from './UpdateThingMutation';
import DeleteThingMutation from './DeleteThingMutation';

// Mutations currently not setup
const Mutation = new ObjectType({
  name: 'Mutation',
  fields: {
    createThing: CreateThingMutation,
    updateThing: UpdateThingMutation,
    deleteThing: DeleteThingMutation,
  },
});

export default Mutation;
