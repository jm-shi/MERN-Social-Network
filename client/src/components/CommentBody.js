import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';

import EditModal from './EditModal';
import UserAvatar from './UserAvatar';

const styles = theme => ({
  cardHeader: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  commentContent: {
    backgroundColor: '#CFD8DC',
    borderRadius: '10px',
    padding: theme.spacing.unit
  },
  commentText: {
    fontWeight: '400'
  },
  commenter: {
    fontWeight: '800'
  },
  timestamp: {
    fontWeight: '300'
  }
});

class CommentBody extends Component {
  state = {
    avatarColor: 18,
    modalOpen: false,
    name: ''
  };

  componentDidMount = () => {
    const { commenterId, getUser } = this.props;
    getUser(commenterId).then((res) => {
      this.setState({
        avatarColor: res.payload.user.avatarColor,
        name: res.payload.user.name
      });
    });
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const {
      classes,
      commentId,
      commenterId,
      deleteComment,
      editComment,
      getUser,
      postId,
      timestamp,
      text
    } = this.props;
    const { avatarColor, modalOpen, name } = this.state;

    return (
      <CardHeader
        avatar={
          <UserAvatar
            author={name}
            authorId={commenterId}
            avatarColor={avatarColor}
            getUser={getUser}
          />
        }
        title={
          <div className={classes.commentContent}>
            <div className={classes.commenter}>{name}</div>
            <div className={classes.timestamp}>
              {moment(timestamp).fromNow()}
            </div>
            <div className={classes.commentText}>{text}</div>
            <Button
              onClick={() => deleteComment('deleteComment', commentId, postId)}
            >
              Delete
            </Button>
            {/* <Button
              onClick={() =>
                editComment(
                  'editComment',
                  commentId,
                  postId,
                  'testing edit comment'
                )
              }
            >
              Edit
            </Button> */}
            <Button onClick={() => this.handleModalOpen()}>Edit</Button>
            <EditModal
              _id={commentId}
              isEditingComment
              commentPostId={postId}
              editPost={editComment}
              handleModalClose={this.handleModalClose}
              modalOpen={modalOpen}
              text={text}
            />
          </div>
        }
        className={classes.cardHeader}
      />
    );
  }
}

CommentBody.propTypes = {
  classes: PropTypes.object.isRequired,
  commentId: PropTypes.string.isRequired,
  commenterId: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles)(CommentBody);
