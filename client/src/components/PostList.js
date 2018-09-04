import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

// const PostList = ({ posts }) => (
//   <div>
// {posts.map(post => (
//   <Post key={post._id} _id={post._id} text={post.text} />
// ))}
//   </div>
// );

class PostList extends React.Component {
  render() {
    console.log('postlist props', this.props);
    const { posts, deletePost } = this.props;
    return (
      <div>
        {posts.map(post => (
          <Post
            key={post._id}
            _id={post._id}
            text={post.text}
            deletePost={id => deletePost(id)}
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
  deletePost: PropTypes.func.isRequired
};

export default PostList;
