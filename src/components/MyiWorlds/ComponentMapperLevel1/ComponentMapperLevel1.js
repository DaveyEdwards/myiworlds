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
import s from './ComponentMapperLevel1.css';
import Header from '../Header/Header';
import MediaImage from '../MediaImage/MediaImage';
import PlainText from '../PlainText/PlainText';
import EdgeCards from '../EdgeCards/EdgeCards';

class ComponentMapperLevel1 extends React.Component {
	static propTypes = {
		// eslint-disable-next-line react/forbid-prop-types
		n0de: PropTypes.object,
		type: PropTypes.string,
	};

	static defaultProps = {
		n0de: null,
		type: null,
	};

	render() {
		return (
			<div>
				{(() => {
					switch (this.props.n0de.type) {
					case 'HEADER':
						return <Header n0de={this.props.n0de} />;
					case 'IMAGE':
						return <MediaImage n0de={this.props.n0de} />;
					case 'PLAIN_TEXT':
						return <PlainText n0de={this.props.n0de} />;
					case 'EDGE_CARDS':
						return <EdgeCards n0de={this.props.n0de} />;
					default:
						return `Page Component got: ${this.props.n0de.type}`;
					}
				})()}
			</div>
		);
	}
}

export default createFragmentContainer(withStyles(s)(ComponentMapperLevel1), graphql`
  fragment ComponentMapperLevel1_n0de on N0de {
		type
		...Header_n0de
		...MediaImage_n0de
		...PlainText_n0de
		...EdgeCards_n0de
  }
`);

