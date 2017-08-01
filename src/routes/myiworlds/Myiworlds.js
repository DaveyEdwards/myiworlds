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
import Paper from 'material-ui/Paper';
import s from './MyiWorlds.css';
import ComponentMapperLevel1 from '../../components/MyiWorlds/ComponentMapperLevel1/ComponentMapperLevel1';


class MyiWorlds extends React.Component {
	static propTypes = {
		n0deEdge: PropTypes.object, // eslint-disable-line react/forbid-prop-types
	};

	static defaultProps = {
		n0deEdge: null,
	};

	render() {
		return (
			<div className={s.root}>
				<Paper className={s.page} elevation={4}>
					{this.props.n0deEdge.edges.map(({ node }) =>
						<ComponentMapperLevel1 key={node._id} n0de={node} />,
					)}
				</Paper>
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
          ...ComponentMapperLevel1_n0de
        }
      }
    }
  `,
);
