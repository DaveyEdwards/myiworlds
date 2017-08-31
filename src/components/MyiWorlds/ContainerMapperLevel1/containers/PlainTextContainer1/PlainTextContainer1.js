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
import PlainText from '../../../PlainText/PlainText';
import s from './PlainTextContainer1.css';

class PlainTextContainer1 extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
    getCircleByPath: PropTypes.object,
  };

  static defaultProps = {
    title: null,
    subtitle: null,
    description: null,
    value: null,
  };

  render() {
    return (
      <PlainText
        title={this.props.getCircleByPath.title}
        subtitle={this.props.getCircleByPath.subtitle}
        description={this.props.getCircleByPath.description}
        value={this.props.getCircleByPath.value}
      />
    );
  }
}

export default createFragmentContainer(
  withStyles(s)(PlainTextContainer1),
  graphql`
    fragment PlainTextContainer1_getCircleByPath on Circle {
      title
      subtitle
      description
      value
    }
  `,
);
