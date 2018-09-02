import { connect } from 'react-redux';
import PostList from '../components/PostList';

const mapStateToProps = state => ({
  posts: state.postsReducer
});

export default connect(mapStateToProps)(PostList);
