import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentBody from './CommentBody';
import CommentField from './CommentField';

class Comments extends Component {
  render() {
    const {
      addComment,
      commenterId,
      comments,
      deleteComment,
      editComment,
      postId,
      getUser,
      signedInUserId
    } = this.props;

    return (
      <div>
        <hr />

        {comments.map(comment => (
          <CommentBody
            key={comment._id}
            commentId={comment._id}
            commenterId={comment.commenterId}
            deleteComment={deleteComment}
            editComment={editComment}
            getUser={getUser}
            postId={postId}
            signedInUserId={signedInUserId}
            text={comment.text}
            timestamp={comment.timestamp}
          />
        ))}

        <CommentField
          addComment={addComment}
          commenterId={commenterId}
          getUser={getUser}
          postId={postId}
        />
      </div>
    );
  }
}

Comments.defaultProps = {
  comments: []
};

Comments.propTypes = {
  addComment: PropTypes.func.isRequired,
  commenterId: PropTypes.string.isRequired,
  comments: PropTypes.array,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  signedInUserId: PropTypes.string.isRequired
};

export default Comments;
