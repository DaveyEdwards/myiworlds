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
import s from './Video.css';
import YouTube from 'react-youtube';

class Video extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
    page: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.string
  };

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      }
    };
    // _onReady(event) {
    //   // access to player in all event handlers via event.target
    //   event.target.pauseVideo();
    // }
    return (
      <div>
        <h1>{this.props.page.title}</h1>
        <YouTube
          videoId={this.props.page.value}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }
}

export default createFragmentContainer(withStyles(s)(Video), graphql`
  fragment Video_page on Page {
    title
    description
    value
  }
`);
