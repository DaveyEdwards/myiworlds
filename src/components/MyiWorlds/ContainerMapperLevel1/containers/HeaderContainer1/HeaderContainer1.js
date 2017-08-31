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
import Header from '../../../Header/Header';
import s from './HeaderContainer1.css';

class HeaderContainer1 extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    getCircleByPath: PropTypes.object,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    getCircleByPath: null,
    title: null,
    subtitle: null,
    description: null,
  };

  render() {
    return (
      <Header
        title={this.props.getCircleByPath.title}
        subtitle={this.props.getCircleByPath.subtitle}
        description={this.props.getCircleByPath.description}
      />
    );
  }
}

export default createFragmentContainer(
  withStyles(s)(HeaderContainer1),
  graphql`
    fragment HeaderContainer1_getCircleByPath on Circle {
      title
      subtitle
      description
    }
  `,
);
