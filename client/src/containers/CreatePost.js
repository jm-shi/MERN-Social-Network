import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { createPost } from '../actions/postsActions';

class CreatePost extends Component {
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
    dispatch(createPost(uuid(), postText));
    this.setState({ postText: '' });
  };

  render() {
    const { postText } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="What's on your mind?"
            value={postText}
            onChange={this.handleChange}
          />
          <button type="submit">Create Post</button>
        </form>
      </div>
    );
  }
}

CreatePost.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(CreatePost);
