import { connect } from 'react-redux';
import PostList from '../components/PostList';
import { deletePost, updatePost } from '../actions/postsActions';

const mapStateToProps = state => ({
  posts: state.postsReducer.posts
});

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id)),
  updatePost: (id, text, author) => dispatch(updatePost(id, text, author))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
