import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from '../containers/DeleteButton';

const Post = ({ text, id }) => (
  <div>
    <span>{text}</span>
    <DeleteButton id={id} />
  </div>
);

Post.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Post;
