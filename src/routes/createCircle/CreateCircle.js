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
import PanTool from 'material-ui-icons/PanTool';
import KeyboardArrowUp from 'material-ui-icons/KeyboardArrowUp';
import KeyboardArrowDown from 'material-ui-icons/KeyboardArrowDown';
import Grid from 'material-ui/Grid';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import FolderIcon from 'material-ui-icons/Folder';
import DragHandle from 'material-ui-icons/DragHandle';
import Avatar from 'material-ui/Avatar';
import Draggable from 'react-draggable';
import IconButton from 'material-ui/IconButton';
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
  state = {
    contentShowing: true,
    snackbarOpen: false,

    pathFull: '',
    pathName: '',
    public: false,
    viewers: [],
    creator: this.props.viewer.id,
    type: 'TEST',
    styles: '',
    tags: [],
    title: '',
    subtitle: '',
    description: '',
    media: '',
    value: '',
    blob: '',
    number: 0,
    boolean: false,
    line: '',
    lines: [],
    linesMany: [],
  };

  handleBooleanToggle = (stateName) => {
    this.setState({ [stateName]: !this.state[stateName] });
  };

  requiresTypeSnackbar = () => {
    this.setState({ snackbarOpen: true });
  };

  handleCloseTypeSnackbar = () => {
    this.setState({ snackbarOpen: false });
  };

  handleInputChange = (action) => {
    this.setState({ [action.target.id]: action.target.value });
  };

  handlePathChange = (action) => {
    const pathWithoutSpaces = action.target.value.replace(' ', '-').toLowerCase();
    this.setState({
      pathName: pathWithoutSpaces,
    });
  };

  cancelCreateCircle = () => {
    this.resetState();
    window.history.back();
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
      <Draggable handle="draggablesHandle">
        <Card
          className={s.card}
          style={this.state.contentShowing ? { height: '600px' } : { height: '74px' }}
        >
          <div className={s.cardHeader}>
            <div className={s.headerTitle}>
              <draggablesHandle>
                <Typography type="headline" align="justify" noWrap gutterBottom>
                  Create Circle
                </Typography>
              </draggablesHandle>
            </div>

            <div className={s.headerButtons}>
              <draggablesHandle className={s.headerButton} style={{ marginRight: '8px' }}>
                <IconButton>
                  <PanTool />
                </IconButton>
              </draggablesHandle>
              {this.state.contentShowing
                ? <div className={s.headerButton}>
                  <IconButton onClick={() => this.handleBooleanToggle('contentShowing')}>
                    <KeyboardArrowUp />
                  </IconButton>
                </div>
                : <div className={s.headerButton}>
                  <IconButton onClick={() => this.handleBooleanToggle('contentShowing')}>
                    <KeyboardArrowDown />
                  </IconButton>
                </div>}
            </div>
          </div>

          <Divider light />

          <div className={s.cardContentContainer}>
            <div className={s.cardContent}>
              <FormControlLabel
                control={
                  <Checkbox
                    id="public"
                    checked={this.state.public}
                    onChange={() => this.handleBooleanToggle('public')}
                    value="Public"
                  />
                }
                label="Public"
              />
              <br />

              <TextField
                id="type"
                label="Type"
                value={this.state.type}
                onChange={this.handleInputChange}
                margin="normal"
              />
              <br />

              <FormControl>
                <TextField
                  id="pathFull"
                  label="URL path to this circle"
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

              <br />
              <Button onClick={this.selectStyleCircle}>Styles</Button>
              <br />

              <TextField
                id="title"
                label="Title"
                value={this.state.title}
                onChange={this.handleInputChange}
                margin="normal"
                fullWidth
              />
              <br />

              <TextField
                id="subtitle"
                label="Subtitle"
                value={this.state.subtitle}
                onChange={this.handleInputChange}
                margin="normal"
                fullWidth
              />
              <br />

              <TextField
                id="description"
                label="Description"
                value={this.state.description}
                onChange={this.handleInputChange}
                margin="normal"
                fullWidth
                multiline
              />
              <br />

              <br />
              <Button onClick={this.selectMedia}>Media</Button>
              <br />

              <TextField
                id="value"
                label="Value"
                value={this.state.value}
                onChange={this.handleInputChange}
                margin="normal"
                fullWidth
                multiline
              />
              <br />

              <TextField
                id="blob"
                label="Blob"
                value={this.state.blob}
                onChange={this.handleInputChange}
                margin="normal"
                fullWidth
                multiline
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
                    onChange={() => this.handleBooleanToggle('boolean')}
                    value="Boolean"
                  />
                }
                label="Boolean"
              />
              <br />

              <br />
              <Typography type="title" noWrap gutterBottom>
                Connected Circle
              </Typography>
              <ListItem button style={{ width: '400px' }}>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Single-line item" secondary={'Secondary text'} />
              </ListItem>
              <br />

              <br />
              <Typography type="title" noWrap gutterBottom>
                Connected Circles
              </Typography>
              <Grid item xs={12} md={12}>
                <div>
                  <List>
                    <ListItem button style={{ width: '400px' }}>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Single-line item" secondary={'Secondary text'} />
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                          <DragHandle />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                  <List>
                    <ListItem button style={{ width: '400px' }}>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Single-line item" secondary={'Secondary text'} />
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                          <DragHandle />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                  <List>
                    <ListItem button style={{ width: '400px' }}>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Single-line item" secondary={'Secondary text'} />
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                          <DragHandle />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <br />

              <br />
              <Typography type="title" noWrap gutterBottom>
                Many Connected Circles
              </Typography>
              <Grid item xs={12} md={12}>
                <div>
                  <List>
                    <ListItem button style={{ width: '400px' }}>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Single-line item" secondary={'Secondary text'} />
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                          <DragHandle />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                  <List>
                    <ListItem button style={{ width: '400px' }}>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Single-line item" secondary={'Secondary text'} />
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                          <DragHandle />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                  <List>
                    <ListItem button style={{ width: '400px' }}>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Single-line item" secondary={'Secondary text'} />
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete">
                          <DragHandle />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <br />
            </div>
          </div>

          <Divider light />
          <div className={s.cardFooter}>
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
      </Draggable>
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
