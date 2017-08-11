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
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import s from './PlainText.css';

// TODO: Setup with grid system on page
class PlainText extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
    title: null,
    subtitle: null,
    description: null,
    value: null,
  };

  render() {
    return (
      <div>
        <Grid className={s.root} container justify="center">
          <Grid item xs={12} md={10} lg={6} className={s.textBlock}>
            <Typography type="display2" gutterBottom>
              {this.props.title}
            </Typography>
            <Typography type="headline" gutterBottom>
              {this.props.subtitle}
            </Typography>
            <Typography type="body1" gutterBottom>
              {this.props.description}
            </Typography>
            <br />
            <br />
            <Typography type="body1" gutterBottom>
              {this.props.value}
            </Typography>
          </Grid>
        </Grid>
        <Divider light />
      </div>
    );
  }
}

export default withStyles(s)(PlainText);
