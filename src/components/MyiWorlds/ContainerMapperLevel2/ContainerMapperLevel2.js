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
import s from './ContainerMapperLevel2.css';
import HeaderContainer2 from './containers/HeaderContainer2/HeaderContainer2';
import MediaContainer2 from './containers/MediaContainer2/MediaContainer2';
import PlainTextContainer2 from './containers/PlainTextContainer2/PlainTextContainer2';
import EdgeCardsContainer2 from './containers/EdgeCardsContainer2/EdgeCardsContainer2';

class ContainerMapperLevel2 extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    n0deEdge: PropTypes.object,
    type: PropTypes.string,
  };

  static defaultProps = {
    n0deEdge: null,
    type: 'default',
  };

  render() {
    return (
      <div>
        {this.props.n0deEdge.edges.map(({ node: n0de }, index) =>
          <div key={n0de.id + index}>
            {(() => {
              switch (n0de.type) {
                case 'HEADER':
                  return <HeaderContainer2 n0de={n0de} />;
                case 'IMAGE':
                  return <MediaContainer2 n0de={n0de} />;
                case 'PLAIN_TEXT':
                  return <PlainTextContainer2 n0de={n0de} />;
                case 'EDGE_CARDS':
                  return <EdgeCardsContainer2 n0de={n0de} />;
                default:
                  return `Page Component got: ${n0de.type}`;
              }
            })()}
          </div>,
        )}
      </div>
    );
  }
}

export default createFragmentContainer(
  withStyles(s)(ContainerMapperLevel2),
  graphql`
    fragment ContainerMapperLevel2_n0deEdge on N0deConnection {
      edges {
        node {
          id
          type
          ...HeaderContainer2_n0de
          ...MediaContainer2_n0de
          ...PlainTextContainer2_n0de
          ...EdgeCardsContainer2_n0de
        }
      }
    }
  `,
);
