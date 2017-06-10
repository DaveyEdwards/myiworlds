import PageType from './PageType';
import UserType from './UserType';
import { nodeField } from '../nodeInterface';

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    User: {
      type: UserType,
      resolve: () => getUser(),
    },
    pageByUrl: {
      type: PageType,
      resolve: ( path ) => getPageByPath(path);
    },
    node: nodeField,
  },
});

export default Query;
