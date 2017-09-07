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
import HeaderContainer2 from './containers/HeaderContainer2/HeaderContainer2';
import MediaContainer2 from './containers/MediaContainer2/MediaContainer2';
import PlainTextContainer2 from './containers/PlainTextContainer2/PlainTextContainer2';
import EdgeCardsContainer2 from './containers/EdgeCardsContainer2/EdgeCardsContainer2';

class ContainerMapperLevel2 extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    linesMany: PropTypes.object,
    type: PropTypes.string,
  };

  static defaultProps = {
    linesMany: null,
    type: 'default',
  };

  render() {
    return (
      <div>
        {this.props.linesMany.edges.map(({ node: circle }) =>
          <div key={circle.id}>
            {(() => {
              switch (circle.type) {
                case 'HEADER':
                  return <HeaderContainer2 circle={circle} />;
                case 'IMAGE':
                  return <MediaContainer2 circle={circle} />;
                case 'PLAIN_TEXT':
                  return <PlainTextContainer2 circle={circle} />;
                case 'EDGE_CARDS':
                  return <EdgeCardsContainer2 circle={circle} />;
                case 'CARD':
                  return 'ContainerMapperLevel2 got a card';
                default:
                  return `Page Component got: ${circle.type}`;
              }
            })()}
          </div>,
        )}
      </div>
    );
  }
}

export default createFragmentContainer(
  ContainerMapperLevel2,
  graphql`
    fragment ContainerMapperLevel2_linesMany on CircleConnection {
      edges {
        node {
          id
          type
          ...HeaderContainer2_circle
          ...MediaContainer2_circle
          ...PlainTextContainer2_circle
          ...EdgeCardsContainer2_circle
        }
      }
    }
  `,
);
