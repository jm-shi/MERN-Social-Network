import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from '../containers/DeleteButton';

const Post = ({ text, _id }) => (
  <div>
    <span>{text}</span>
    <DeleteButton _id={_id} />
  </div>
);

Post.propTypes = {
  _id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Post;
