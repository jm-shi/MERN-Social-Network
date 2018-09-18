import { connect } from 'react-redux';
import PostList from '../components/PostList';
import {
  deletePost,
  getPosts,
  editPost,
  updatePostLikes
} from '../actions/postsActions';
import { getFollowing } from '../actions/userActions';

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id)),
  getFollowing: id => dispatch(getFollowing(id)),
  getPosts: () => dispatch(getPosts()),
  editPost: (id, text, author) => dispatch(editPost(id, text, author)),
  updatePostLikes: (action, postId, likerId) =>
    dispatch(updatePostLikes(action, postId, likerId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
