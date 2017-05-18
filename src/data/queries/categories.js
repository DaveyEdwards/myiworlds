import { GraphQLList as List } from 'graphql';
import CategoryType from '../types/CategoryType';
// import { globalIdField } from 'graphql-relay';
import { runCategoryQuery } from '../services/googleDatastore/category';

const categories = {
  type: new List(CategoryType),
  args: {
  },
  resolve: async () => {
    let categories = [];
    try {
      categories = await runCategoryQuery();
      console.log('CategoryQuery', categories);
    } catch (err) {
      console.log('CategoryQuery err', err);
    }
    console.log('CategoryQuery', categories);
    categories = categories.map(category => ({ ...category, id: category.type }));
    return categories;
  }
  // resolve() {
  //   // Safety mesure to prevent spam before firing off query
  //   if (lastFetchTask) {
  //     return lastFetchTask;
  //   }
  //
  //   if ((new Date() - lastFetchTime) > 1000 * 60 * 10 /* 10 mins */) {
  //     lastFetchTime = new Date();
  //     lastFetchTask = fetch(url)
  //       .then(response => response.json())
  //       .then((data) => {
  //         if (data.status === 'ok') {
  //           items = data.items;
  //         }
  //
  //         lastFetchTask = null;
  //         return items;
  //       })
  //       .catch((err) => {
  //         lastFetchTask = null;
  //         throw err;
  //       });
  //
  //     if (items.length) {
  //       return items;
  //     }
  //
  //     return lastFetchTask;
  //   }
  //
  //   return items;
  // },
};

export default categories;
