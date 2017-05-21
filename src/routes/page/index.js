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
import Page from './Page';
import Layout from '../../components/Layout';

const title = 'List of Pages';

export default {

  path: '/pages',

  async action({ api }) {
    const data = await api.fetchQuery(graphql`query indexPageQuery {
      me { ...Layout_me }
      pages { ...Page_pages }
    }`);
    return {
      title,
      component: <Layout me={data.me}><Page pages={data.pages} /></Layout>,
    };
  },

};
