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
import ContainerMapperLevel1 from '../../components/MyiWorlds/ContainerMapperLevel1/ContainerMapperLevel1';

export default {
  path: '/myiworlds/:path',

  async action({ api }, context) {
    const data = await api.fetchQuery(
      graphql`
        query myiWorldsQuery($path: String) {
          viewer {
            id
            username
            n0deByPath(path: $path) {
              ...ContainerMapperLevel1_n0deByPath
            }
          }
        }
      `,
      {
        path: context.path,
      },
    );
    return {
      title: 'MyiWorlds',
      component: (
        <ContainerMapperLevel1 viewer={data.viewer.username} n0deByPath={data.viewer.n0deByPath} />
      ),
    };
  },
};
