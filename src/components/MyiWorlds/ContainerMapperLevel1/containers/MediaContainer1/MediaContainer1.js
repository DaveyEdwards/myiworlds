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
import s from './MediaContainer1.css';

class MediaContainer1 extends React.Component {
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
      <div>
        {(() => {
          switch (this.props.getCircleByPath.type) {
            case 'IMAGE':
              return (
                <MediaImage
                  title={this.props.getCircleByPath.title}
                  value={this.props.getCircleByPath.value}
                />
              );
            case 'GIF':
              return 'MediaContainer1 received: EDGE_GIF. This still needs to be configured.';
            case 'VIDEO':
              return 'MediaContainer1 received: EDGE_VIDEO. This still needs to be configured.';
            default:
              return `MediaContainer1 received: ${this.props.getCircleByPath.type}`;
          }
        })()}
      </div>
    );
  }
}

export default createFragmentContainer(
  withStyles(s)(MediaContainer1),
  graphql`
    fragment MediaContainer1_getCircleByPath on Circle {
      type
      title
      value
    }
  `,
);
