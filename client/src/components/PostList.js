import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

/* eslint-disable react/prefer-stateless-function */
class PostList extends React.Component {
  render() {
    console.log('postlist this.props', this.props);
    return (
      <div>
        {this.props.posts.map(post => (
          <Post key={post.text} text={post.text} />
        ))}
      </div>
    );
  }
}

// const PostList = ({ posts }) => (
//   <div>
// {posts.map(post => (
//   <Post text={post.text} />
// ))}
//   </div>
// );

PostList.defaultProps = {
  posts: [{ text: 'Testing post feed. No posts available.' }]
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  )
};

export default PostList;
