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
import List from '../../containers/List/List';
import Card from '../../styledComponents/Card';
// import styled from 'styled-components';
//
// const Card = styled.div`
//   background: black;
// `;

class Page extends React.Component {

  render() {
    return (
      <div>
        <Card>
          {
            this.props.pages.map((page, index) =>
              <Card key={page._id + index} >
                {
                  page.public ?
                  (() => {
                    switch (page.type) {
                      case 'video':
                        return <Video page={page} />;
                      case 'text':
                        return <Text page={page} />;
                      case 'image_svg':
                        return <Svg page={page} />;
                      case 'image':
                        return <Image mode='fill' height='150px' position={'center center'} page={page} />;
                      case 'list':
                        return <List page={page} />;
                      default:
                        return <h1>Page Component got: {page.type}</h1>;
                    }
                  })() : <h2>This is a private page.</h2>
                }
              </Card>
            )
          }
        </Card>
      </div>
    );
  }
}

export default createFragmentContainer(withStyles(s)(Page), graphql`
  fragment Page_pages on Page @relay(plural: true) {
    _id
    type
    public
    ...Text_page
    ...Image_page
    ...Svg_page
    ...Video_page
    ...List_page
  }
`);
