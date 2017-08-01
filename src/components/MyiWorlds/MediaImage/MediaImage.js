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
import s from './MediaImage.css';

// TODO: Refactor to better perform with relay as no longer a dumb component
class MediaImage extends React.Component {
	static propTypes = {
		// eslint-disable-next-line react/forbid-prop-types
		n0de: PropTypes.object,
		title: PropTypes.string,
		value: PropTypes.string,
		height: PropTypes.string,
		background: PropTypes.string,
		width: PropTypes.string,
		style: PropTypes.string,
		position: PropTypes.string,
	};

	static defaultProps = {
		n0de: null,
		title: null,
		value: null,
		mode: null,
		src: null,
		height: null,
		background: null,
		width: null,
		style: null,
		position: null,
	}

	render() {
		const { height, background, width, style, position } = this.props;
		const src = this.props.n0de.value;
		const mode = 'fill';

		const modes = {
			fill: 'cover',
			fit: 'contain',
		};
		const size = modes[mode] || 'cover';

		const defaults = {
			height: height || '400px',
			width: width || '100%',
			backgroundColor: background || 'none',
			backgroundPosition: position || 'center center',
		};

		const important = {
			backgroundImage: `url("${src}")`,
			backgroundSize: size,
			backgroundRepeat: 'no-repeat',
		};

		return (
			// <img alt={this.props.n0de.title} src={this.props.n0de.value} />
			<div
				title={this.props.n0de.title}
				style={{ ...defaults, ...style, ...important }}
			/>
		);
	}
}

export default createFragmentContainer(withStyles(s)(MediaImage), graphql`
  fragment MediaImage_n0de on N0de {
		title
		value
  }
`);
