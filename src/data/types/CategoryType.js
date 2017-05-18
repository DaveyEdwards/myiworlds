import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const CategoryType = new ObjectType({
  name: 'Category',
  description: 'A category list',
  fields: {
    type: { type: StringType },
    image: { type: StringType },
  },
});

export default CategoryType;
