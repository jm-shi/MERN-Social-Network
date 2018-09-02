import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <Post key={post.id} id={post.id} text={post.text} />
    ))}
  </div>
);

// class PostList extends React.Component {
//   render() {
//     console.log('postlist props', this.props);
//     return (
//       <div>
//         {posts.map(post => (
//           <Post key={post.text} id={post.text} text={post.text} />
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
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default PostList;
