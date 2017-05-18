/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import CategoryType from '../types/CategoryType';
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
};

export default categories;
