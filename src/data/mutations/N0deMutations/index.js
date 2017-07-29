import { GraphQLObjectType as ObjectType } from 'graphql';

import CreateN0deMutation from './CreateN0deMutation';
import UpdateN0deMutation from './UpdateN0deMutation';
import DeleteN0deMutation from './DeleteN0deMutation';

// Mutations currently not setup
const Mutation = new ObjectType({
	name: 'Mutation',
	fields: {
		createN0de: CreateN0deMutation,
		updateN0de: UpdateN0deMutation,
		deleteN0de: DeleteN0deMutation,
	},
});

export default Mutation;
