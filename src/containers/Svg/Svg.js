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
import s from './Svg.css';

class Svg extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
    page: PropTypes.object,
    title: PropTypes.string,
    value: PropTypes.string,
    blob: PropTypes.string
  };

  render() {
    return (
      <div>
        {console.log(JSON.stringify(this.props.page))}
        <h1>{this.props.page.title}</h1>
        <p>{this.props.page.value}</p>
        <p>{this.props.page.blob}</p>
      </div>
    );
  }
}

export default createFragmentContainer(withStyles(s)(Svg), graphql`
  fragment Svg_page on Page {
    title
    value
    blob
  }
`);
