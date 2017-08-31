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
import ContainerMapperLevel2 from '../ContainerMapperLevel2/ContainerMapperLevel2';

class ContainerMapperLevel1 extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    getCircleByPath: PropTypes.object,
    type: PropTypes.string,
  };

  static defaultProps = {
    getCircleByPath: null,
    type: 'default',
  };

  render() {
    return (
      <Paper className={s.page} elevation={4}>
        {(() => {
          switch (this.props.getCircleByPath.type) {
            case 'HEADER':
              return <HeaderContainer1 getCircleByPath={this.props.getCircleByPath} />;
            case 'IMAGE':
              return <MediaContainer1 getCircleByPath={this.props.getCircleByPath} />;
            case 'PLAIN_TEXT':
              return <PlainTextContainer1 getCircleByPath={this.props.getCircleByPath} />;
            case 'PAGE':
              return (
                <ContainerMapperLevel2
                  styles={this.props.getCircleByPath.styles}
                  linesMany={this.props.getCircleByPath.linesMany}
                />
              );
            default:
              return `Page Component got: ${this.props.getCircleByPath.type}`;
          }
        })()}
      </Paper>
    );
  }
}

export default createFragmentContainer(
  withStyles(s)(ContainerMapperLevel1),
  graphql`
    fragment ContainerMapperLevel1_getCircleByPath on Circle {
      type
      ...HeaderContainer1_getCircleByPath
      ...MediaContainer1_getCircleByPath
      ...PlainTextContainer1_getCircleByPath
      styles {
        value
      }
      linesMany {
        ...ContainerMapperLevel2_linesMany
      }
    }
  `,
);
