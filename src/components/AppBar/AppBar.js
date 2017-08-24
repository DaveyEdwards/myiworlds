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
import MUIAppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import s from './AppBar.css';

class AppBar extends React.Component {
  static propTypes = {};

  render() {
    return (
      <MUIAppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={s.flex}>
            Title
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </MUIAppBar>
    );
  }
}

export default createFragmentContainer(
  withStyles(s)(AppBar),
  graphql`
    fragment AppBar_viewer on Viewer {
      id
    }
  `,
);
