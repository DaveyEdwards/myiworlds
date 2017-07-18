// /**
//  * React Starter Kit (https://www.reactstarterkit.com/)
//  *
//  * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE.txt file in the root directory of this source tree.
//  */
//
// import React from 'react';
// import { graphql } from 'relay-runtime';
// import Myiworlds from './Myiworlds';
// // import ContentMapper from '../../containers/ContentMapper';
//
// export default {
//   path: '/myiworlds',
//
//   async action({ api }) {
//     const data = await api.fetchQuery(graphql`
//       query indexMyiworldsQuery {
//
//       }
//     `);
//     // if (!data.news) throw new Error('Failed to load the news feed.');
//     return {
//       title: 'MyiWorlds Content Mapper',
//       component: <div />,
//     };
//   },
// };
