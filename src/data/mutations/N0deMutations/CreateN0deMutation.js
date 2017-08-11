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
import { createN0de, getN0deBy_id } from '../../GoogleCloudPlatform/StorageAndDatabases/Datastore/N0de/Queries';
// eslint-disable-next-line camelcase
import { getPersonBy_id } from '../../GoogleCloudPlatform/StorageAndDatabases/Datastore/Person/Queries';
import N0deType from '../../types/N0deType';
import PersonType from '../../types/PersonType';

const CreateN0deDataMutation = mutationWithClientMutationId({
	name: 'createN0de',
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
		n0de: { type: StringType },
		n0deList: { type: new List(StringType) },
		n0deEdge: { type: new List(StringType) },
	},

	outputFields: {
		createdN0de: {
			type: N0deType,
			resolve: async payload => getN0deBy_id(payload._id),
		},
		viewer: {
			type: PersonType,
			resolve: async payload => getPersonBy_id(payload.creator),
		},
	},

	mutateAndGetPayload: async (inputFields) => {
		// eslint-disable-next-line no-console
		console.log('\n', '\n', 'I successfully saved the "n0de" you gave me in my mind, it has increased my power level.', '\n', '\n');

		return createN0de(inputFields);
	},
});
export default CreateN0deDataMutation;
