import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as moment from 'moment';

import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import EditModal from './EditModal';
import UserAvatar from './UserAvatar';

const options = ['Edit', 'Delete'];
const ITEM_HEIGHT = 48;

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
  link: {
    color: '#000',
    textDecoration: 'none'
  },
  timestamp: {
    fontWeight: '300'
  }
});

class CommentBody extends Component {
  state = {
    anchorEl: null,
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

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
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
      signedInUserId,
      timestamp,
      text
    } = this.props;
    const { anchorEl, avatarColor, modalOpen, name } = this.state;
    const open = Boolean(anchorEl);

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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ flexDirection: 'column' }}>
                <div className={classes.commenter}>
                  <Link className={classes.link} to={`/profile/${commenterId}`}>
                    {name}
                  </Link>
                </div>
                <div className={classes.timestamp}>
                  {moment(timestamp).fromNow()}
                </div>
              </div>
              <div>
                {commenterId !== signedInUserId ? null : (
                  <div>
                    <IconButton
                      aria-label="More"
                      aria-owns={open ? 'long-menu' : null}
                      aria-haspopup="true"
                      onClick={this.handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={this.handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: 200
                        }
                      }}
                    >
                      {options.map(option => (
                        <MenuItem
                          key={option}
                          onClick={() =>
                            this.handleClose() ||
                            (option === 'Delete'
                              ? deleteComment(
                                  'deleteComment',
                                  commentId,
                                  postId
                                )
                              : null) ||
                            (option === 'Edit' ? this.handleModalOpen() : null)
                          }
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                )}
              </div>
            </div>

            <div className={classes.commentText}>{text}</div>

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
  signedInUserId: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles)(CommentBody);
