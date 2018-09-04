import { connect } from 'react-redux';
import PostList from '../components/PostList';
import { deletePost } from '../actions/postsActions';

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id))
});

export default connect(
  undefined,
  mapDispatchToProps
)(PostList);
