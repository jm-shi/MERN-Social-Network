import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

// const PostList = ({ posts, deletePost }) => (
//   <div>
//     {posts.map(post => (
//       <Post
//         key={post._id}
//         _id={post._id}
//         text={post.text}
//         deletePost={id => deletePost(id)}
//       />
//     ))}
//   </div>
// );

class PostList extends Component {
  render() {
    console.log('PostList this.props', this.props);
    const { posts, deletePost, updatePost } = this.props;
    return (
      <div>
        {posts.map(post => (
          <Post
            key={post._id}
            _id={post._id}
            author={post.author}
            text={post.text}
            deletePost={id => deletePost(id)}
            updatePost={(id, text, author) => updatePost(id, text, author)}
          />
        ))}
      </div>
    );
  }
}

PostList.defaultProps = {
  posts: []
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  deletePost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired
};

export default PostList;
