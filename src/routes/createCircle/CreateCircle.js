/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// THINK ABOUT: Redoing this into the page component
// having edit components where you see the components
// These modules pop up when you want to edit that piece of the page
// Pages would also be able to have hidden from view things
// Example styles: hidden behind a settings tab or more options.

import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { graphql, createFragmentContainer } from 'react-relay';
import Card, { CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FormControlLabel } from 'material-ui/Form';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';
import Checkbox from 'material-ui/Checkbox';
import Typography from 'material-ui/Typography';
import Snackbar from 'material-ui/Snackbar';
import Divider from 'material-ui/Divider';
import s from './CreateCircle.css';
import CreateCircleMutation from './CreateCircleMutation';

class CreateCircle extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    relay: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    viewer: PropTypes.object.isRequired,
  };

  static defaultProps = {};

  // Default selection is everything showing until you change the type (first thing)
  // It can then suggest content types as you go down the fields.  Making it look like AI
  // TODO: ALL types hidden that are not defaults on those specific types
  // But you can click + property and add any of our options.
  // (Need to get datastore queries working without schema).
  // But I need it for querying (so extension of current one with ability to keep going)
  state = {
    snackbarOpen: false,
    pathFull: '',
    pathName: '',
    pathError: false,
    public: false,
    viewers: [],
    creator: this.props.viewer.id,
    type: 'TEST',
    styles: '',
    tags: [''],
    order: 9999,
    title: '',
    subtitle: '',
    description: '',
    media: '',
    value: '',
    blob: '',
    number: 0,
    boolean: true,
    line: '',
    lines: [''],
    linesMany: [''],
  };

  requiresTypeSnackbar = () => {
    this.setState({ snackbarOpen: true });
  };

  handleCloseTypeSnackbar = () => {
    this.setState({ snackbarOpen: false });
  };

  selectStylesCirlce = () => {
    // Open module inside this module to select from a list
    // Can create new Styles circle inside.  Creating a new one opens a module to type in css
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handlePathChange = (e) => {
    const pathWithoutSpaces = e.target.value.replace(' ', '-');

    this.setState({
      pathName: pathWithoutSpaces,
    });
  };

  toggleBooleanChange = name => (event, checked) => {
    this.setState({ [name]: checked });
  };

  cancelCreateCircle = () => {
    // eslint-disable-next-line no-console
    console.log('Canceling Create Circle');
    this.resetState();
  };

  resetState = () => {
    this.setState({
      public: false,
      pathFull: '',
      pathName: '',
      viewers: [],
      type: '',
      styles: '',
      tags: [''],
      order: '',
      title: '',
      subtitle: '',
      description: '',
      media: '',
      value: '',
      blob: '',
      number: '',
      boolean: '',
      line: '',
      lines: [''],
      linesMany: [''],
    });
  };

  createCircle = () => {
    if (this.state.type === '') {
      this.requiresTypeSnackbar();
      return;
    }

    let fullPath;

    if (this.state.pathfull === '') {
      fullPath = `${this.props.viewer.username}/${uuid()}`;
    } else {
      fullPath = `${this.props.viewer.username}/${this.state.pathName}`;
    }

    CreateCircleMutation.commit(
      this.props.relay.environment,
      {
        pathFull: fullPath,
        pathName: this.state.pathName,
        public: this.state.public,
        viewers: this.state.viewers,
        creator: this.state.creator,
        type: this.state.type,
        order: this.state.order,
        title: this.state.title,
        subtitle: this.state.subtitle,
        description: this.state.description,
        value: this.state.value,
        number: this.state.number,
        boolean: this.state.boolean,
      },
      this.props.viewer.id,
    );
  };

  render() {
    return (
      <Card className={s.card}>
        <div className={s.cardHeader}>
          <Typography type="headline" gutterBottom>
            Create Circle
          </Typography>
        </div>
        <Divider light />
        <br />
        <div className={s.cardContent}>
          <FormControlLabel
            control={
              <Checkbox
                id="public"
                checked={this.state.public}
                onChange={this.toggleBooleanChange('public')}
                value="Public"
              />
            }
            label="Public"
          />
          <br />

          <FormControl>
            <TextField
              id="pathFull"
              label="URL path to this"
              value={this.state.pathName}
              onChange={this.handlePathChange}
              maxLength="5"
              margin="normal"
            />
            <FormHelperText>
              www.MyiWorlds.com/{this.props.viewer.username}/{this.state.pathName}
            </FormHelperText>
          </FormControl>
          <br />
          <br />

          <TextField
            id="type"
            label="Type"
            value={this.state.type}
            onChange={this.handleInputChange}
            margin="normal"
          />
          <br />

          <br />
          <Button onClick={this.selectStyleCircle}>Styles</Button>
          <Typography type="body1" gutterBottom>
            this.circle.styles.title
          </Typography>
          <Typography type="body1" gutterBottom>
            this.circle.styles.blob (Hidden from view unless expanded. Hidden and can be fetched by
            Relay)
          </Typography>
          <br />

          <TextField
            id="order"
            label="Order"
            value={this.state.order}
            onChange={this.handleInputChange}
            margin="normal"
          />
          <br />

          <TextField
            id="title"
            label="Title"
            value={this.state.title}
            onChange={this.handleInputChange}
            margin="normal"
          />
          <br />

          <TextField
            id="subtitle"
            label="Subtitle"
            value={this.state.subtitle}
            onChange={this.handleInputChange}
            margin="normal"
          />
          <br />

          <TextField
            id="description"
            label="Description"
            value={this.state.description}
            onChange={this.handleInputChange}
            margin="normal"
          />
          <br />

          <br />
          <Button onClick={this.selectMedia}>Media</Button>
          <Typography type="body1" gutterBottom>
            this.circle.media.title
          </Typography>
          <Typography type="body1" gutterBottom>
            (Depends on what type) this.circle.media.value
          </Typography>
          <br />

          <TextField
            id="value"
            label="Value"
            value={this.state.value}
            onChange={this.handleInputChange}
            margin="normal"
          />
          <br />

          <TextField
            id="blob"
            label="Blob"
            value={this.state.blob}
            onChange={this.handleInputChange}
            margin="normal"
          />
          <br />

          <TextField
            id="number"
            label="Number"
            value={this.state.number}
            onChange={this.handleInputChange}
            margin="normal"
          />
          <br />

          <FormControlLabel
            control={
              <Checkbox
                id="boolean"
                checked={this.state.boolean}
                onChange={this.toggleBooleanChange('boolean')}
                value="Boolean"
              />
            }
            label="Boolean"
          />
          <br />

          <br />
          <Button onClick={this.selectCircle}>Circle</Button>
          <Typography type="body1" gutterBottom>
            this.circle.line.title
          </Typography>
          <Button>View Circle</Button>
          <br />

          <br />
          <Button onClick={this.selectCircles}>Circles</Button>
          <Typography type="body1" gutterBottom>
            this.circle.lines.map - title (displays maybe 5)
          </Typography>
          <br />

          <br />
          <Button onClick={this.selectCirclesMany}>Circles Many</Button>
          <Typography type="body1" gutterBottom>
            this.circle.linesMany.map - title (displays maybe 5)
          </Typography>
          <br />
        </div>

        <Divider light />
        <div className={s.cardActions}>
          <CardActions>
            <div className={s.flexGrow} />
            <Button onClick={this.cancelCreateCircle}>Cancel</Button>
            <Button raised onClick={this.createCircle} color="primary">
              Create
            </Button>
          </CardActions>
        </div>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={4e3}
          onRequestClose={this.handleCloseTypeSnackbar}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Please select a content Type</span>}
        />
      </Card>
    );
  }
}

export default createFragmentContainer(
  withStyles(s)(CreateCircle),
  graphql`
    fragment CreateCircle_viewer on Viewer {
      id
      username
    }
  `,
);
