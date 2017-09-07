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
import Divider from 'material-ui/Divider';
import s from './Header.css';

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    title: null,
    subtitle: null,
    description: null,
  };

  render() {
    return (
      <div>
        <div className={s.root}>
          <Typography type="display3" gutterBottom>
            {this.props.title}
          </Typography>
          <Typography type="subheading" gutterBottom>
            {this.props.subtitle}
          </Typography>
          <Typography type="body1" gutterBottom>
            {this.props.description}
          </Typography>
        </div>
        <Divider light />
      </div>
    );
  }
}

export default withStyles(s)(Header);
