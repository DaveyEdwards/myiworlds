/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { graphql } from 'relay-runtime';
import Category from './Category';
import Layout from '../../components/Layout';

const title = 'Categories Page';

export default {

  path: '/category',

  async action({ api }) {
    const data = await api.fetchQuery(graphql`query indexCategoryQuery {
      me { ...Layout_me }
      categories { ...Category_categories }
    }`);
    return {
      title,
      component: <Layout me={data.me}><Category categories={data.categories} /></Layout>,
    };
  },

};
