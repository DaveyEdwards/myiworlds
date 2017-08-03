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
	path: '/myiworlds',

	async action({ api }) {
		// KOISTYA QUESTION - How can I get this pulling from the url
		const data = await api.fetchQuery(graphql`
			query myiWorldsQuery {
				n0deByPath (path: "home") {
					id
					type
					n0deEdge {
						...MyiWorlds_n0deEdge
					}
				}
			}
		`);

		return {
			title: 'MyiWorlds',
			component: <MyiWorlds n0deEdge={data.n0deByPath.n0deEdge} />,
		};
	},
};


// path: '/myiworlds/:path',

// 	async action({ api }) {
// 		const path = await fetch(`${context.path}`);
// 		const data = await api.fetchQuery(graphql`
// 			query myiWorldsQuery (path: String) {
// 				n0deByPath (path: ${context.params.path}) {
// 					id
// 					type
// 					n0deEdge {
// 						...MyiWorlds_n0deEdge
// 					}
// 				}
// 			}
// 		`);

// 		return {
// 			title: 'MyiWorlds',
// 			queries:
// 			component: <MyiWorlds n0deEdge={data.n0deByPath.n0deEdge} />,
// 		};
// 	},
