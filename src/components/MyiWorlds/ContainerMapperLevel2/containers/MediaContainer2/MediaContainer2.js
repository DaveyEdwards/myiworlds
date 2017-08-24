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
import MediaImage from '../../../MediaImage/MediaImage';
import s from './MediaContainer2.css';

class MediaContainer2 extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    circle: PropTypes.object,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    circle: null,
    title: null,
    subtitle: null,
    description: null,
  };

  render() {
    return (
      <div>
        {(() => {
          switch (this.props.circle.type) {
            case 'GIF':
            case 'IMAGE':
              return (
                <MediaImage
                  title={this.props.circle.title}
                  subtitle={this.props.circle.subtitle}
                  description={this.props.circle.description}
                  value={this.props.circle.value}
                />
              );
            case 'VIDEO':
              return 'MediaContainer2 received: EDGE_VIDEO. This still needs to be configured.';
            case 'FILE':
              return 'MediaContainer2 received: EDGE_FILE. This still needs to be configured.';
            default:
              return `MediaContainer2 received: ${this.props.circle.type}`;
          }
        })()}
      </div>
    );
  }
}

export default createFragmentContainer(
  withStyles(s)(MediaContainer2),
  graphql`
    fragment MediaContainer2_circle on Circle {
      type
      title
      subtitle
      description
      value
    }
  `,
);
