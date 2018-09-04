// import React from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Post from '../components/Post';
import { deletePost } from '../actions/postsActions';

// export class DeleteButton extends React.Component {
//   render() {
//     const { _id, removePost } = this.props;
//     return (
//       <div>
//         <button type="button" onClick={() => removePost(_id)}>
//           DELETE
//         </button>
//       </div>
//     );
//   }
// }

// DeleteButton.propTypes = {
//   _id: PropTypes.string.isRequired,
//   removePost: PropTypes.func.isRequired
// };

// const mapDispatchToProps = dispatch => ({
//   deletePost: id => dispatch(deletePost(id))
// });

const mapStateToProps = state => ({
  posts: state.postsReducer
});

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id))
});

// export default connect(
//   undefined,
//   mapDispatchToProps
// )(DeleteButton);

// export default connect(
//   undefined,
//   mapDispatchToProps
// )(Post);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
