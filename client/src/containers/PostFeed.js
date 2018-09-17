import { connect } from 'react-redux';
import PostList from '../components/PostList';
import { deletePost, getPosts, updatePost } from '../actions/postsActions';
import { getFollowing } from '../actions/userActions';

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id)),
  getFollowing: id => dispatch(getFollowing(id)),
  getPosts: () => dispatch(getPosts()),
  updatePost: (id, text, author) => dispatch(updatePost(id, text, author))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
