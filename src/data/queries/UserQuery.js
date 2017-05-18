import { fromGlobalId } from 'graphql-relay';
import { GraphQLString } from 'graphql';
import UserType from '../types/UserType';
import { getAccessTokenFromHeader } from '../services/token';
import { getUserByID } from '../../services/googleDatastore/user';
import { runFollowingQuery } from '../../services/googleDatastore/followUser';

const UserQuery = {
  description: 'Get User information',
  type: UserType,
  args: {
    id: {
      type: GraphQLString
    }
  },
  resolve: async (arg1, args, { request }) => {
    let user = null;
    let userId = null;
    try {
      const token = getAccessTokenFromHeader(request);
      if (args.id) {
        userId = fromGlobalId(args.id).id;
      } else if (token) {
        userId = fromGlobalId(token).id;
      }
      if (userId && userId.length > 0) {
        user = await getUserByID(userId);
        user.followingAuthors = await runFollowingQuery([{
          fieldName: 'userId',
          condition: '=',
          value: userId
        }]);
      }
    } catch (err) {
      console.log('UserQuery err', err);
    }
    console.log('User query', user);
    return user;
  }
};

export default UserQuery;
