import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import compose from 'recompose/compose';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { createPost } from '../actions/postsActions';

import './CreatePost.css';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

export class CreatePost extends Component {
  state = {
    postText: ''
  };

  handleChange = (e) => {
    const postText = e.target.value;
    this.setState(() => ({ postText }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { postText } = this.state;
    const { dispatch } = this.props;
    if (!postText.trim()) return;
    dispatch(createPost(postText));
    this.setState({ postText: '' });
  };

  render() {
    const { postText } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="textarea"
            placeholder="What's on your mind?"
            multiline
            className={classes.textField}
            margin="normal"
          />
        </form>

        <form className="postbar" onSubmit={this.handleSubmit}>
          <input
            className="postbar__input"
            type="text"
            placeholder="What's on your mind?"
            value={postText}
            onChange={this.handleChange}
          />
          <button className="postbar__button" type="submit">
            Create Post
          </button>
        </form>
      </div>
    );
  }
}

CreatePost.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  connect()
)(CreatePost);
