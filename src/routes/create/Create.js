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
import Card, { CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import s from './Create.css';
import CreateN0deMutation from './CreateN0deMutation';

class Create extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    relay: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    viewer: PropTypes.object.isRequired,
  };

  static defaultProps = {
    type: 'test',
  };

  // Default selection is everything showing until you change the type (first thing)
  // It can then suggest content types as you go down the fields.  Making it look like AI
  // TODO: ALL types hidden that are not defaults on those specific types
  // But you can click + property and add any of our options.  (Need to get datastore queries working without schema).  But I need it for querying (so extension of current one with ability to keep going)
  state = {
    // TODO: Add working function to make random path generation ontop of the viewers username
    // path: `${this.props.viewer.username}/${randomPathGeneratorCopy}`,
    public: false,
    // To add new viewers module pops up with your friends. Takes over current module
    viewers: [''],
    // TODO: Based on Type selected it will change to a pre configured set of other values to allow to be typed in
    // + Takes over current module
    type: '',
    // Create Styles module - Takes over current module
    styles: '',
    // Takes over current module to give you a better viewed selector
    tags: [''],
    // Visually show in a list of the other ones it is displayed with (If relevant)
    order: '',
    title: '',
    subtitle: '',
    description: '',
    // Module - B
    media: '',
    value: '',
    blob: [],
    // Basic Text input
    number: '',
    // Simple MD Inputtype
    boolean: '',
    // Module
    n0de: '',
    // Selector module. Card list (can change card view)
    n0deList: [''],
    // Selector module. Card list (can change card view)
    n0deEdge: [''],
  };

  createN0de = () => {
    CreateN0deMutation.commit(
      this.props.relay.environment,
      {
        type: this.state.type,
        title: this.state.title,
        public: this.state.public,
      },
      this.props.viewer.id,
    );
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  toggleBooleanChange = name => (event, checked) => {
    this.setState({ [name]: checked });
  };

  render() {
    return (
      <Card className={s.card}>
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
        /> <br />
        <TextField
          id="title"
          label="Title"
          value={this.state.title}
          onChange={this.handleInputChange}
          margin="normal"
        /><br />
        <TextField
          id="type"
          label="Type"
          value={this.state.type}
          onChange={this.handleInputChange}
          margin="normal"
        /><br />
        <CardActions>
          <Button >Cancel</Button>
          <Button
            onClick={this.createN0de}
          >Create</Button>
        </CardActions>

      </Card>
    );
  }
}

export default createFragmentContainer(
  withStyles(s)(Create),
  graphql`
  fragment Create_viewer on Person {
    id
    username
  }
`,
);
