import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ text }) => (
  <div>
    <div>{text}</div>
  </div>
);

Post.propTypes = {
  text: PropTypes.string.isRequired
};

export default Post;
