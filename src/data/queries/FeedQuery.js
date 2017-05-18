import { fromGlobalId } from 'graphql-relay';
import { GraphQLString, GraphQLList, GraphQLInt } from 'graphql';
import AllFeedType from '../types/AllFeedType';
import { getAccessTokenFromHeader } from '../services/token';
import { getUsers } from '../services/googleDatastore/user';
import { runFeedQuery } from '../services/googleDatastore/feed';
import { getLikedFeeds } from '../services/googleDatastore/likeFeed';

const FeedQuery = {
  description: 'Get Feeds information',
  type: AllFeedType,
  args: {
    query: {
      type: GraphQLString
    },
    offset: {
      type: GraphQLInt
    },
    limit: {
      type: GraphQLInt
    },
  },
  resolve: async (arg1, args, { request }) => {
    let userId = null;
    let feeds = [];
    const offset = args.offset || 0;
    const limit = args.limit;
    let query = args.query || JSON.stringify([]);
    query = JSON.parse(query);
    try {
      const token = getAccessTokenFromHeader(request);
      if (token && token.length > 0) {
        userId = fromGlobalId(token).id;
      }
      feeds = await runFeedQuery(query, offset, limit);
      if (userId) {
        const feedIds = feeds.map(feed => feed.id);
        const likedFeeds = await getLikedFeeds(userId, feedIds);
        likedFeeds.forEach((likedFeed) => {
          for (let index = 0; index < feeds.length; index++) {
            if (feeds[index].id === likedFeed.feedId) {
              feeds[index].liked = likedFeed.liked;
            }
          }
        });
      }
    } catch (err) {
      console.log('FeedQuery err', err);
    }
    console.log('Feed query', feeds);
    return { feeds, userId };
  }
};

export default FeedQuery;
