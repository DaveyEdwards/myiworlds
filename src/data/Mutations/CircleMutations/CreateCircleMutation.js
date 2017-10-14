import { mutationWithClientMutationId } from 'graphql-relay';
import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import uuid from 'uuid/v1';
import {
  createEntity,
  getEntityByKey,
} from '../../GoogleCloudPlatform/StorageAndDatabases/Datastore/index';
import CircleType from '../../types/CircleType';

const userId = 'viewer000000000000000000000000000001';

const CreateCircleDataMutation = mutationWithClientMutationId({
  name: 'createCircle',
  inputFields: {
    _id: { type: GraphQLString },
    pathFull: { type: GraphQLString },
    pathName: { type: GraphQLString },
    public: { type: GraphQLBoolean },
    viewers: { type: new GraphQLList(GraphQLString) },
    type: { type: new GraphQLNonNull(GraphQLString) },
    styles: { type: new GraphQLList(GraphQLString) },
    tags: { type: new GraphQLList(GraphQLString) },
    title: { type: GraphQLString },
    subtitle: { type: GraphQLString },
    description: { type: GraphQLString },
    media: { type: GraphQLString },
    creator: { type: GraphQLString },
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
      resolve: response => response.message,
    },
    createdCircle: {
      type: CircleType,
      resolve: async payload => payload.createdEntity,
    },
  },

  mutateAndGetPayload: async (inputFields) => {
    const entityToCreate = [];

    const requiredFields = [
      {
        name: 'kind',
        value: 'Circles',
        excludeFromIndexes: true,
      },
    ];

    entityToCreate.push(requiredFields[0]);

    function buildField(name) {
      let field;

      function customIdLogic() {
        if (!inputFields._id || (inputFields._id !== '' || inputFields._id !== null)) {
          field = {
            name,
            value: uuid(),
          };
        } else {
          field = {
            name,
            value: inputFields[name],
          };
        }
      }

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
      function date() {
        field = {
          name,
          value: new Date(),
        };
      }

      const entityData = {
        _id: customIdLogic,
        type: indexedField,
        creator: indexedField,
        dateCreated: date,
        dateUpdated: date,
        slug: indexedField,
        title: indexedField,
        subtitle: indexedField,
        description: indexedField,
        public: indexedField,
        tags: indexedField,
        default: notIndexedField,
      };
      (entityData[name] || entityData.default)();

      return field;
    }

    Object.keys(inputFields).forEach((prop) => {
      const object = buildField(prop);
      entityToCreate.push(object);
    });

    return createEntity(entityToCreate);
  },
});

export default CreateCircleDataMutation;

    // function buildField(name) {
    //   let field;
    //   switch (name) {
    //     case 'type':
    //     case 'creator':
    //     case 'dateCreated':
    //     case 'dateUpdated':
    //     case 'slug':
    //     case 'title':
    //     case 'subtitle':
    //     case 'description':
    //     case 'public':
    //     case 'tags':
    //     case 'order':
    //     // Fields you want to be indexed
    //       field = {
    //         name,
    //         value: inputFields[name],
    //       };
    //       break;
    //     default:
    //       field = {
    //         name,
    //         value: inputFields[name],
    //         excludeFromIndexes: true,
    //       };
    //   }
    //   return field;
    // }
