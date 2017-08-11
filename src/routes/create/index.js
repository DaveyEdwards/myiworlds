// /**
//  * React Starter Kit (https://www.reactstarterkit.com/)
//  *
//  * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE.txt file in the root directory of this source tree.
//  */

import React from 'react';
import { graphql } from 'relay-runtime';
import Create from './Create';

export default {
  path: '/create',

  async action({ api }) {
    const data = await api.fetchQuery(graphql`
      query createQuery {
        viewer {
          ...Create_viewer
        }
      }
    `);
    return {
      title: 'Create',
      component: <Create viewer={data.viewer} />,
    };
  },
};
