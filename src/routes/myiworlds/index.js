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
// import ContentMapper from '../../containers/ContentMapper';

export default {
	path: '/myiworlds',

	async action({ api }) {
		const data = await api.fetchQuery(graphql`
			query myiWorldsQuery {
				n0deEdge {
					...MyiWorlds_n0deEdge
				}
			}
		`);
		// if (!data.news) thrownew Error('Failed to load the news feed.');
		return {
			title: 'MyiWorlds Content Mapper',
			component: <MyiWorlds n0deEdge={data.n0deEdge} />,
		};
	},
};
