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
import s from './List.css';

class List extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
    page: PropTypes.object,
  };

  render() {
    return (
      <div>
        <ul>
          {
            this.props.page.pageList.map((page) =>
              <li key={page._id}>
                <h1>{page.title}</h1>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default createFragmentContainer(withStyles(s)(List), graphql`
  fragment List_page on Page {
    title
    description
    pageList {
      _id
      title
    }
  }
`);
