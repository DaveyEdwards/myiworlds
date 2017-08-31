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
import CreateCircle from './CreateCircle';

export default {
  path: '/createCircle',

  async action({ api }) {
    const data = await api.fetchQuery(graphql`
      query createCircleQuery {
        viewer {
          ...CreateCircle_viewer
        }
      }
    `);
    return {
      title: 'CreateCircle',
      component: <CreateCircle viewer={data.viewer} />,
    };
  },
};
