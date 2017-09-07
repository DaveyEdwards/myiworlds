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
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import s from './EdgeCards.css';

class EdgeCards extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    media: PropTypes.object,
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    media: null,
    _id: '',
    title: '',
    description: '',
  };

  render() {
    return (
      <Grid item sm={4} key={this.props._id}>
        <Card>
          {this.props.media.value
            ? <div className={s.imgContainer}>
              <img className={s.hero} src={this.props.media.value} alt={this.props.media.title} />
            </div>
            : null}

          <CardContent>
            {this.props.title
              ? <Typography type="headline" component="h2">
                {this.props.title}
              </Typography>
              : null}
            {this.props.description
              ? <Typography component="p">
                {this.props.description}
              </Typography>
              : null}
          </CardContent>

          <CardActions>
            <Button dense color="primary">
              VIEW PAGE
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(s)(EdgeCards);
