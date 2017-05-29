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
import s from './Image.css';

class Image extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
    page: PropTypes.object,
    position: PropTypes.string,
    height: PropTypes.string,
    mode: PropTypes.string,
  };

  render() {
    let { mode, height, background, width, style, position } = this.props;
    let modes = {
      'fill': 'cover',
      'fit': 'contain'
    };
    let size = modes[mode] || 'contain';

    let defaults = {
      height: height || '100%',
      width: width || '100%',
      backgroundColor: background || 'none',
      backgroundPosition: this.props.position || 'center center',
    };

    let important = {
      backgroundImage: `url("${ this.props.page.value }")`,
      backgroundSize: size,
      backgroundRepeat: 'no-repeat'
    };

    return (
      <div
        title={this.props.page.title}
        style={{...defaults, ...style, ...important}}
      />
    );
  }
}

export default createFragmentContainer(withStyles(s)(Image), graphql`
  fragment Image_page on Page {
    title
    description
    value
  }
`);
