import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts, deletePost, updatePost }) => (
  <div>
    {posts.map(post => (
      <Post
        key={post._id}
        _id={post._id}
        author={post.author}
        authorId={post.authorId}
        avatarColor={post.avatarColor}
        text={post.text}
        timestamp={post.timestamp}
        deletePost={id => deletePost(id)}
        updatePost={(id, text, author) => updatePost(id, text, author)}
      />
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
      author: PropTypes.string.isRequired,
      authorId: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired
    })
  ),
  deletePost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired
};

export default PostList;
