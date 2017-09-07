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
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import s from './MyiWorlds.css';
import ContainerMapperLevel1 from '../../components/MyiWorlds/ContainerMapperLevel1/ContainerMapperLevel1';
import Link from '../../components/Link';

class MyiWorlds extends React.Component {
  static propTypes = {
    getCircleByPath: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    getCircleByPath: null,
  };

  render() {
    return (
      <div>
        <ContainerMapperLevel1 getCircleByPath={this.props.getCircleByPath} />
        <div className={s.fab}>
          <Link to="/createCircle">
            <Button fab color="primary" aria-label="add">
              <AddIcon />
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(
  withStyles(s)(MyiWorlds),
  graphql`
    fragment MyiWorlds_getCircleByPath on Circle {
      ...ContainerMapperLevel1_getCircleByPath
    }
  `,
);
