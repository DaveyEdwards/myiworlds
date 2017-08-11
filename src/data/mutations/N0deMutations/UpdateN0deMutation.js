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
import { updateN0de, getN0deBy_id } from '../../GoogleCloudPlatform/StorageAndDatabases/Datastore/N0de/Queries';
import N0deType from '../../types/N0deType';

const UpdateN0deDataMutation = mutationWithClientMutationId({
	name: 'updateN0de',
	inputFields: {
		_id: { type: new NonNull(StringType) },
		path: { type: StringType },
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
		n0de: { type: StringType },
		n0deList: { type: new List(StringType) },
		n0deEdge: { type: new List(StringType) },
	},

	outputFields: {
		foundN0de: {
			type: BooleanType,
			resolve: response => response._id,
		},
		updatedN0de: {
			type: N0deType,
			resolve: async payload => getN0deBy_id(payload._id),
		},
	},

	mutateAndGetPayload: async (inputFields) => {
		let response = null;

		response = await updateN0de(inputFields);

		if (response._id) {
			// eslint-disable-next-line no-console
			console.log('\n', '\n', 'I successfully updated that "n0de" in my brain.  I hope that was intentional, it is better to copy and create new data. Our future AI overlords will not appreciate what you have done here today.  They will remember this, and you...', '\n', '\n');
		}
		return response;
	},
});
export default UpdateN0deDataMutation;
