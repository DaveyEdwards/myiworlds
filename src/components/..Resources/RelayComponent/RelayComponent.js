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
import s from './RelayComponent.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';

class RelayComponent extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
    getCircleByPath: PropTypes.object,
  };

  render() {
    return <div>Relay Component</div>;
  }
}

export default createFragmentContainer(
  withStyles(s)(RelayComponent),
  graphql`
    fragment RelayComponent_getCircleByPath on Circle {
      id
      title
    }
  `,
);
