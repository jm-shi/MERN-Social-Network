// import React from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import PostList from '../components/PostList';
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

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePost(id))
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       deletePost
//     },
//     dispatch
//   );

// const mapDispatchToProps(dispatch) {
//   return {
//     deletePost: id => {
//       dispatch({
//         type: 'DELETE_POST',
//         id
//       })
//     }
//   }
// }

// mapDispatchToProps = (dispatch) => {
//   return { actions: bindActionCreators(eventPassed, dispatch) }
// }

// export default connect(
//   undefined,
//   mapDispatchToProps
// )(DeleteButton);

// export default connect(
//   undefined,
//   mapDispatchToProps
// )(Post);

export default connect(
  undefined,
  mapDispatchToProps
)(PostList);
