import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <Post key={post._id} _id={post._id} text={post.text} />
    ))}
  </div>
);

PostList.defaultProps = {
  posts: []
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default PostList;
