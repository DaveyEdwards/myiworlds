/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import PageType from '../types/PageType';
import { runPageQuery } from '../services/googleDatastore/Page';

const pages = {
  type: new List(PageType),
  args: {
  },
  resolve: async () => {
    let pages = [];
    try {
      pages = await runPageQuery();
      console.log('PageQuery', pages);
    } catch (err) {
      console.log('PageQuery err', err);
    }
    console.log('PageQuery', pages);
    pages = pages.map(Page => ({ ...Page, id: Page.type }));
    return pages;
  }
};

export default pages;
