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

// class PostList extends React.Component {
//   render() {
//     console.log('postlist props', this.props);
//     return (
//       <div>
//         {this.props.posts.map(post => (
//           <Post key={post._id} _id={post._id} text={post.text} />
//         ))}
//       </div>
//     );
//   }
// }

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
