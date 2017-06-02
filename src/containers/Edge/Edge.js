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
import s from './Edge.css';
import Card from '../../styledComponents/Card';

class Edge extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
    page: PropTypes.object,
  };

  render() {
    return (
      <div>
        <div>
          <h2>{this.props.page.title}</h2>
          <p>{this.props.page.description}</p>
        </div>
        <ul>
          {
            this.props.page.pageEdge.edges.map((edge) =>
              <li key={edge.node.id}>
                <h3>{edge.node.title}</h3>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default createFragmentContainer(withStyles(s)(Edge), graphql`
  fragment Edge_page on Page {
    title
    description
    pageEdge {
      edges {
        node {
          id
          _id
          title
        }
      }
    }
  }
`);
