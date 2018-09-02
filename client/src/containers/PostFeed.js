import { connect } from 'react-redux';
import { getPosts } from '../actions/postsActions';
import PostList from '../components/PostList';

const mapStateToProps = state => ({
  posts: state.postsReducer
});

export default connect(mapStateToProps)(PostList);
