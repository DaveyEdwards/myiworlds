import { mutationWithClientMutationId } from 'graphql-relay';
import {
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLBoolean as BooleanType,
  GraphQLInt as NumberType,
  GraphQLList as List,
} from 'graphql';
import GraphQLJSON from 'graphql-type-json';
import uuid from 'uuid/v1';
import {
  createEntity,
  getEntityByKey,
} from '../../GoogleCloudPlatform/StorageAndDatabases/Datastore/index';
// eslint-disable-next-line camelcase
import { getViewerBy_id } from '../../GoogleCloudPlatform/StorageAndDatabases/Datastore/Viewer/Queries';
import CircleType from '../../types/CircleType';
import ViewerType from '../../types/ViewerType';

const CreateCircleDataMutation = mutationWithClientMutationId({
  name: 'createCircle',
  inputFields: {
    pathFull: { type: StringType },
    pathName: { type: StringType },
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
    line: { type: StringType },
    lines: { type: new List(StringType) },
    linesMany: { type: new List(StringType) },
  },

  outputFields: {
    createdCircle: {
      type: CircleType,
      resolve: async payload => getEntityByKey(payload.kind, payload._id, payload.creator),
    },
    viewer: {
      type: ViewerType,
      resolve: async payload => getViewerBy_id(payload.creator),
    },
  },

  mutateAndGetPayload: async (inputFields) => {
    const entityToCreate = [];

    if (!inputFields._id) {
      entityToCreate.push({
        name: '_id',
        value: uuid(),
      });
    }

    entityToCreate.push(
      {
        name: 'kind',
        value: 'Page',
        excludeFromIndexes: true,
      },
      {
        name: 'dateUpdated',
        value: new Date(),
      },
      {
        name: 'dateCreated',
        value: new Date(),
      },
    );


    function buildField(name) {
      let field;
      switch (name) {
        case 'type':
        case 'creator':
        case 'created':
        case 'slug':
        case 'title':
        case 'subtitle':
        case 'description':
        case 'public':
        case 'tags':
        case 'order':
          field = {
            name,
            value: inputFields[name],
          };
          break;
        default:
          field = {
            name,
            value: inputFields[name],
            excludeFromIndexes: true,
          };
      }
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


    // Didn't like this as much as switch
    // function getPropertyValueObject(name) {
    //   let field;
    //   const entityData = {
    //     title: () => {
    //       field = {
    //         name,
    //         value: inputFields[name],
    //       };
    //     },
    //     _id: () => {
    //       field = {
    //         name,
    //         value: inputFields[name],
    //       };
    //     },
    //     type: () => {
    //       field = {
    //         name,
    //         value: inputFields[name],
    //       };
    //     },
    //     creator: () => {
    //       field = {
    //         name,
    //         value: inputFields[name],
    //         excludeFromIndexes: true,
    //       };
    //     },
    //     created: () => {
    //       field = {
    //         name,
    //         value: inputFields[name],
    //       };
    //     },
    //     pathFull: () => {
    //       field = {
    //         name,
    //         value: inputFields[name],
    //       };
    //     },
    //     default: () => {
    //       field = {
    //         name,
    //         value: inputFields[name],
    //         excludeFromIndexes: true,
    //       };
    //     },
    //   };
    //   (entityData[name] || entityData.default)();

    //   return field;
    // }
