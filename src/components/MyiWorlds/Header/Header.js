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
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import s from './Header.css';

class Header extends React.Component {
	static propTypes = {
		// eslint-disable-next-line react/forbid-prop-types
		n0de: PropTypes.object,
		title: PropTypes.string,
		subtitle: PropTypes.string,
		description: PropTypes.string,
	};

	static defaultProps = {
		n0de: null,
		title: null,
		subtitle: null,
		description: null,
	};

	render() {
		return (
			<div>
				<div className={s.root}>
					<Typography type="display4" gutterBottom >{this.props.n0de.title}</Typography>
					<Typography type="subheading" gutterBottom >{this.props.n0de.subtitle}</Typography>
					<Typography type="body1" gutterBottom >{this.props.n0de.description}</Typography>
				</div>
				<Divider light />
			</div>
		);
	}
}

export default createFragmentContainer(withStyles(s)(Header), graphql`
  fragment Header_n0de on N0de {
		title
		subtitle
		description
  }
`);
