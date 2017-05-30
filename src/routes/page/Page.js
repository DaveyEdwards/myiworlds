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
import s from './Page.css';
import Text from '../../containers/Text/Text';
import Image from '../../containers/Image/Image';
import Video from '../../containers/Video/Video';
import Svg from '../../containers/Svg/Svg';

class Page extends React.Component {

  render() {
    return (
      <div>
        {
          this.props.pages.map((page) =>
            <div key={page._id}>
              {(() => {
                switch (page.type) {
                  case 'video':
                    return <Video page={page} />;
                  case 'text':
                    return <Text page={page} />;
                  case 'image_svg':
                    return <Svg page={page} />;
                  case 'image':
                    return <Image mode='fill' height='150px' position={'center center'} page={page} />;
                  // case 'list':
                    // return <List page={page} />;
                  default:
                    return `Page Component got: ${page.type}`;
                }
              })()}
            </div>
          )
        }
      </div>
    );
  }
}

export default createFragmentContainer(withStyles(s)(Page), graphql`
  fragment Page_pages on Page @relay(plural: true) {
    _id
    title
    type
    path
    public
    ...Text_page
    ...Image_page
    ...Svg_page
    ...Video_page
  }
`);
