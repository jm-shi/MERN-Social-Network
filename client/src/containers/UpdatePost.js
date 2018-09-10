import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500
  }
});

export class UpdatePost extends Component {
  /* eslint-disable react/destructuring-assignment */
  state = {
    postText: this.props.text
  };
  /* eslint-enable react/destructuring-assignment */

  handleChange = (e) => {
    const postText = e.target.value;
    this.setState(() => ({ postText }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { postText } = this.state;
    const { id, author, updatePost, handleModalClose } = this.props;
    if (!postText.trim()) return;
    updatePost(id, postText, author);
    handleModalClose();
  };

  render() {
    const { postText } = this.state;
    const { classes } = this.props;
    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={this.handleSubmit}
      >
        <TextField
          id="textarea"
          placeholder="What's on your mind?"
          multiline
          className={classes.textField}
          margin="normal"
          rowsMax="5"
          value={postText}
          onChange={this.handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          type="submit"
        >
          Update
        </Button>
      </form>
    );
  }
}

UpdatePost.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  updatePost: PropTypes.func.isRequired,
  handleModalClose: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default compose(
  withStyles(styles),
  connect()
)(UpdatePost);
