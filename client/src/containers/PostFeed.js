import { connect } from 'react-redux';
import PostList from '../components/PostList';
import { deletePost } from '../actions/postsActions';

const mapStateToProps = state => ({
  posts: state.postsReducer.posts
});

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
