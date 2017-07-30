/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { graphql, createFragmentContainer } from 'react-relay';
import s from './MyiWorlds.css';

// import Header from '../../components/MyiWorlds/Header';
// {/* case 'HEADER':
// 										return <Header title={node.title} />; */}
class MyiWorlds extends React.Component {
	static propTypes = {
		n0deEdge: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
	};

	render() {
		return (
			<div className={s.root}>
				<div className={s.container}>
					{
						this.props.n0deEdge.edges.map(({ node }) =>
							<li key={node._id}>
								{(() => {
									switch (node.type) {

									default:
										return `Page Component got: ${node.type}`;
									}
								})()}
							</li>,
						)
					}
				</div>
			</div>
		);
	}
}

export default createFragmentContainer(
	withStyles(s)(MyiWorlds),
	graphql`
		fragment MyiWorlds_n0deEdge on N0deConnection {
			edges {
				node {
					_id
					type
					title
				}
			}
		}
	`,
);
