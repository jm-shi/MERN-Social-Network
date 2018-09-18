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
    const { posts, deletePost, editPost, updatePostLikes, user } = this.props;
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
                likers={post.likers}
                likesCount={post.likesCount}
                signedInUserId={user.userId}
                text={post.text}
                timestamp={post.timestamp}
                deletePost={id => deletePost(id)}
                editPost={(id, text, author) => editPost(id, text, author)}
                updatePostLikes={(action, postId, likerId) =>
                  updatePostLikes(action, postId, likerId)
                }
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
      likers: PropTypes.array.isRequired,
      likesCount: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired
    })
  ),
  deletePost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  updatePostLikes: PropTypes.func.isRequired,
  getFollowing: PropTypes.func.isRequired,
  user: PropTypes.shape({
    userId: PropTypes.string.isRequired
  }).isRequired
};

export default PostList;
