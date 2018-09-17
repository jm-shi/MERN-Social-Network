import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import Loading from './Loading';

class PostList extends Component {
  state = {
    following: [],
    loading: true
  };

  componentDidMount = () => {
    const { getPosts, getFollowing, user } = this.props;
    getPosts().then(() => {
      getFollowing(user.userId).then((res) => {
        this.setState({
          following: res.payload.user.following,
          loading: false
        });
      });
    });
  };

  render() {
    const { posts, deletePost, updatePost, user } = this.props;
    const { following, loading } = this.state;

    return loading ? (
      <Loading />
    ) : (
      <div>
        {posts.map(
          post =>
            (following.includes(post.authorId) ||
            user.userId === post.authorId ? (
              <Post
                key={post._id}
                _id={post._id}
                author={post.author}
                authorId={post.authorId}
                avatarColor={post.avatarColor}
                signedInUserId={user.userId}
                text={post.text}
                timestamp={post.timestamp}
                deletePost={id => deletePost(id)}
                updatePost={(id, text, author) => updatePost(id, text, author)}
              />
            ) : null)
        )}
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
      author: PropTypes.string.isRequired,
      authorId: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired
    })
  ),
  deletePost: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  getFollowing: PropTypes.func.isRequired,
  user: PropTypes.shape({
    userId: PropTypes.string.isRequired
  }).isRequired
};

export default PostList;
