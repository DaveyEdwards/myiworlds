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
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import s from './EdgeCardsContainer1.css';

class EdgeCardsContainer1 extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    circle: PropTypes.object,
    title: PropTypes.string,
  };

  static defaultProps = {
    circle: null,
    title: '',
  };

  render() {
    return (
      <Card className={s.root}>
        <div className={s.header}>
          <Typography type="display1" gutterBottom>
            {this.props.circle.title}
          </Typography>
        </div>
        <Divider light style={{ marginBottom: '72px' }} />

        <Grid className={s.grid} container gutter={24}>
          {this.props.circle.linesMany.edges.map(({ node }) =>
            <Grid item sm={4} key={node._id}>
              <Card>
                {node.media
                  ? <CardMedia className={s.imgContainer}>
                    <img className={s.hero} src={node.media.value} alt={node.media.title} />
                  </CardMedia>
                  : null}

                <CardContent>
                  {node.title
                    ? <Typography type="headline" component="h2">
                      {node.title}
                    </Typography>
                    : null}
                  {node.description
                    ? <Typography component="p">
                      {node.description}
                    </Typography>
                    : null}
                </CardContent>

                <CardActions>
                  <Button dense color="primary">
                    VIEW PAGE
                  </Button>
                </CardActions>
              </Card>
            </Grid>,
          )}
        </Grid>
        <Divider light />
      </Card>
    );
  }
}

export default createFragmentContainer(
  withStyles(s)(EdgeCardsContainer1),
  graphql`
    fragment EdgeCardsContainer1_circle on Circle {
      title
      linesMany {
        edges {
          node {
            _id
            media {
              value
            }
            title
            type
            description
            pathFull
          }
        }
      }
    }
  `,
);
