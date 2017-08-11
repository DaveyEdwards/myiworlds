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
import Paper from 'material-ui/Paper';
import s from './ContainerMapperLevel1.css';
import HeaderContainer1 from './containers/HeaderContainer1/HeaderContainer1';
import MediaContainer1 from './containers/MediaContainer1/MediaContainer1';
import PlainTextContainer1 from './containers/PlainTextContainer1/PlainTextContainer1';
import EdgeCards from '../EdgeCards/EdgeCards';
import ContainerMapperLevel2 from '../ContainerMapperLevel2/ContainerMapperLevel2';

class ContainerMapperLevel1 extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    n0deByPath: PropTypes.object,
    type: PropTypes.string,
  };

  static defaultProps = {
    n0deByPath: null,
    type: 'default',
  };

  render() {
    return (
      <Paper className={s.page} elevation={4}>
        {(() => {
          switch (this.props.n0deByPath.type) {
            case 'HEADER':
              return <HeaderContainer1 n0deByPath={this.props.n0deByPath} />;
            case 'IMAGE':
              return <MediaContainer1 n0deByPath={this.props.n0deByPath} />;
            case 'PLAIN_TEXT':
              return <PlainTextContainer1 n0deByPath={this.props.n0deByPath} />;
            case 'EDGE_CARDS':
              return <EdgeCards n0deByPath={this.props.n0deByPath} />;
            case 'PAGE':
              return (
                <ContainerMapperLevel2
                  styles={this.props.n0deByPath.styles}
                  n0deEdge={this.props.n0deByPath.n0deEdge}
                />
              );
            default:
              return `Page Component got: ${this.props.n0deByPath.type}`;
          }
        })()}
      </Paper>
    );
  }
}

export default createFragmentContainer(
  withStyles(s)(ContainerMapperLevel1),
  graphql`
    fragment ContainerMapperLevel1_n0deByPath on N0de {
      type
      ...HeaderContainer1_n0deByPath
      ...MediaContainer1_n0deByPath
      ...PlainTextContainer1_n0deByPath
      ...EdgeCards_n0deByPath
      styles {
        value
      }
      n0deEdge {
        ...ContainerMapperLevel2_n0deEdge
      }
    }
  `,
);
