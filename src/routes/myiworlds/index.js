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
import MyiWorlds from './MyiWorlds';

export default {
  path: '/MyiWorlds/:pathFull',

  async action({ api }, context) {
    const data = await api.fetchQuery(
      graphql`
        query myiworldsQuery($pathFull: String) {
          viewer {
            ...MyiWorlds_viewer
            id
            username
            getCircleByPath(pathFull: $pathFull) {
              ...MyiWorlds_getCircleByPath
            }
          }
        }
      `,
      {
        pathFull: context.pathFull,
      },
    );
    return {
      title: 'MyiWorlds',
      component: <MyiWorlds viewer={data.viewer} getCircleByPath={data.viewer.getCircleByPath} />,
    };
  },
};
