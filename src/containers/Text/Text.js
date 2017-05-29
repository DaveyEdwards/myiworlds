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
import s from './Text.css';

class Text extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
    page: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.string
  };

  render() {
    return (
      <div>
        <h1>{this.props.page.title}</h1>
        <p>{this.props.page.description}</p>
        <p>{this.props.page.value}</p>
      </div>
    );
  }
}

export default createFragmentContainer(withStyles(s)(Text), graphql`
  fragment Text_page on Page {
    title
    description
    value
  }
`);
