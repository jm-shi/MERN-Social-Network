import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentBody from './CommentBody';
import CommentField from './CommentField';

class Comments extends Component {
  render() {
    const { addComment, commenterId, comments, postId, getUser } = this.props;

    return (
      <div>
        <hr />
        <CommentField
          addComment={addComment}
          commenterId={commenterId}
          getUser={getUser}
          postId={postId}
        />

        {comments.map(comment => (
          <CommentBody
            key={comment._id || new Date().getTime()}
            commenterId={comment.commenterId}
            getUser={getUser}
            text={comment.text}
            timestamp={comment.timestamp}
          />
        ))}

        <br />
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
  getUser: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired
};

export default Comments;
