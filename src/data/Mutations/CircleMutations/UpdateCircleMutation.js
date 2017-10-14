import { mutationWithClientMutationId } from 'graphql-relay';
import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import {
  updateEntity,
  getEntityByKey,
} from '../../GoogleCloudPlatform/StorageAndDatabases/Datastore/index';
import CircleType from '../../types/CircleType';

const userId = 'viewer000000000000000000000000000001';

const UpdateCircleDataMutation = mutationWithClientMutationId({
  name: 'updateCircle',
  inputFields: {
    _id: { type: new GraphQLNonNull(GraphQLString) },
    pathFull: { type: GraphQLString },
    pathName: { type: GraphQLString },
    public: { type: GraphQLBoolean },
    viewers: { type: new GraphQLList(GraphQLString) },
    type: { type: new GraphQLNonNull(GraphQLString) },
    styles: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) },
    order: { type: GraphQLInt },
    title: { type: GraphQLString },
    subtitle: { type: GraphQLString },
    description: { type: GraphQLString },
    media: { type: GraphQLString },
    creator: { type: new GraphQLNonNull(GraphQLString) },
    editors: { type: new GraphQLList(GraphQLString) },
    dateCreated: { type: GraphQLString },
    dateUpdated: { type: GraphQLString },
    string: { type: GraphQLString },
    blob: { type: GraphQLJSON },
    number: { type: GraphQLInt },
    boolean: { type: GraphQLBoolean },
    line: { type: GraphQLString },
    lines: { type: new GraphQLList(GraphQLString) },
    linesMany: { type: new GraphQLList(GraphQLString) },
  },

  outputFields: {
    message: {
      type: GraphQLString,
      resolve: payload => payload.message,
    },
    updatedCircle: {
      type: CircleType,
      resolve: payload => payload.updatedEntity,
    },
    latestVersionOfCircle: {
      type: CircleType,
      resolve: async payload => getEntityByKey(
        payload.latestVersionOfEntity.newKind,
        payload.latestVersionOfEntity.new_id,
        userId,
      ).then(response => response.entity),
    },
  },

  mutateAndGetPayload: async (inputFields) => {
    const entityToUpdate = [];

    const requiredFields = [
      {
        name: 'kind',
        value: 'Circles',
        excludeFromIndexes: true,
      },
    ];

    entityToUpdate.push(requiredFields[0]);

    function buildField(name) {
      let field;

      function indexedField() {
        field = {
          name,
          value: inputFields[name],
        };
      }

      function notIndexedField() {
        field = {
          name,
          value: inputFields[name],
          excludeFromIndexes: true,
        };
      }

      // TEMPORARY Will be passed by frontend
      // creation date is not from when saved, but exact time the user pressed create
      function date() {
        field = {
          name,
          value: new Date(),
        };
      }

      const entityData = {
        _id: indexedField,
        type: indexedField,
        creator: indexedField,
        dateUpdated: date,
        slug: indexedField,
        title: indexedField,
        subtitle: indexedField,
        description: indexedField,
        public: indexedField,
        tags: indexedField,
        order: indexedField,
        default: notIndexedField,
      };
      (entityData[name] || entityData.default)();

      return field;
    }

    Object.keys(inputFields).forEach((prop) => {
      const object = buildField(prop);
      entityToUpdate.push(object);
    });

    return updateEntity(entityToUpdate, userId);
  },

});
export default UpdateCircleDataMutation;
