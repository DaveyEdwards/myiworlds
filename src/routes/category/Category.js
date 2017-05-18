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
import s from './Category.css';

class Category extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          { this.props.categories.map((edge, index) =>
            <div key={index} >
              <h3>{edge.type}</h3>
              <img src={edge.image} />
            </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(withStyles(s)(Category), graphql`
  fragment Category_categories on Category @relay(plural: true) {
    type
    image
  }
`);
