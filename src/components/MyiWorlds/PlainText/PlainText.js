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
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import s from './PlainText.css';

// TODO: Setup with grid system on page
class PlainText extends React.Component {
	static propTypes = {
		// eslint-disable-next-line react/forbid-prop-types, react/require-default-props
		n0de: PropTypes.object,
	};

	render() {
		return (
			<div >
				<Grid className={s.root} container justify="center">
					<Grid item xs={12} md={10} lg={6} className={s.textBlock}>
						<Typography type="display2" gutterBottom >{this.props.n0de.title}</Typography>
						<Typography type="headline" gutterBottom >{this.props.n0de.subtitle}</Typography>
						<Typography type="body1" gutterBottom >{this.props.n0de.description}</Typography>
						<br />
						<br />
						<Typography type="body1" gutterBottom >{this.props.n0de.value}</Typography>
					</Grid>
				</Grid >
				<Divider light />
			</div>
		);
	}
}

export default createFragmentContainer(withStyles(s)(PlainText), graphql`
  fragment PlainText_n0de on N0de {
		title
		subtitle
		description
		value
  }
`);
