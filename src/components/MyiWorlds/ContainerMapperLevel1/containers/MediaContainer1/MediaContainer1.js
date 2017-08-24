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
    circleByPath: PropTypes.object,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    circleByPath: null,
    title: null,
    subtitle: null,
    description: null,
  };

  render() {
    return (
      <div>
        {(() => {
          switch (this.props.circleByPath.type) {
            case 'MEDIA_IMAGE':
              return <MediaImage circleByPath={this.props.circleByPath} />;
            case 'MEDIA_GIF':
              return 'MediaContainer1 received: EDGE_GIF. This still needs to be configured.';
            case 'MEDIA_VIDEO':
              return 'MediaContainer1 received: EDGE_VIDEO. This still needs to be configured.';
            case 'EDGE_FILE':
              return 'MediaContainer1 received: EDGE_FILE. This still needs to be configured.';
            default:
              return `MediaContainer1 received: ${this.props.circleByPath.type}`;
          }
        })()}
      </div>
    );
  }
}

export default createFragmentContainer(
  withStyles(s)(MediaContainer1),
  graphql`
    fragment MediaContainer1_circleByPath on Circle {
      title
      subtitle
      description
    }
  `,
);
