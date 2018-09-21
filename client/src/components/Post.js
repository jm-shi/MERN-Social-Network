import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as moment from 'moment';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import CommentIcon from '@material-ui/icons/Comment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LikeIcon from '@material-ui/icons/ThumbUp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Comments from './Comments';
import EditModal from './EditModal';
import UserAvatar from './UserAvatar';

const options = ['Edit', 'Delete'];
const ITEM_HEIGHT = 48;

const styles = theme => ({
  actions: {
    display: 'flex'
  },
  card: {
    margin: '20px auto',
    width: '95%'
  },
  link: {
    color: '#000',
    textDecoration: 'none'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
});

class Post extends Component {
  state = {
    anchorEl: null,
    avatarColor: 18,
    expanded: false,
    modalOpen: false,
    name: ''
  };

  componentDidMount = () => {
    const { authorId, getUser } = this.props;
    getUser(authorId).then((res) => {
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

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const {
      _id,
      addComment,
      authorId,
      classes,
      comments,
      deleteComment,
      deletePost,
      editComment,
      editPost,
      getUser,
      likers,
      likesCount,
      signedInUserId,
      text,
      timestamp,
      updatePostLikes
    } = this.props;
    const { anchorEl, avatarColor, expanded, modalOpen, name } = this.state;
    const open = Boolean(anchorEl);
    const relativeTime = moment(timestamp).fromNow();
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <UserAvatar
              author={name}
              authorId={authorId}
              avatarColor={avatarColor}
              getUser={getUser}
            />
          }
          action={
            authorId !== signedInUserId ? null : (
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
                        (option === 'Delete' ? deletePost(_id) : null) ||
                        (option === 'Edit' ? this.handleModalOpen() : null)
                      }
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            )
          }
          title={
            <Link className={classes.link} to={`/profile/${authorId}`}>
              {name}
            </Link>
          }
          subheader={relativeTime}
        />
        <CardContent>
          <Typography>{text}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <div>
            <IconButton
              onClick={() =>
                (likers.includes(signedInUserId)
                  ? updatePostLikes('unlike', _id, signedInUserId)
                  : updatePostLikes('like', _id, signedInUserId))
              }
              aria-label="Like"
            >
              <LikeIcon
                style={
                  likers.includes(signedInUserId) ? { color: '#3f51b5' } : null
                }
              />
            </IconButton>
            {likesCount}
          </div>
          <div style={{ marginLeft: '20px' }}>
            <IconButton onClick={this.handleExpandClick}>
              <CommentIcon />
            </IconButton>
            {comments.length}
          </div>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Comments
            addComment={addComment}
            comments={comments}
            commenterId={signedInUserId}
            deleteComment={deleteComment}
            editComment={editComment}
            getUser={getUser}
            postId={_id}
            signedInUserId={signedInUserId}
          />
        </Collapse>

        <EditModal
          _id={_id}
          editPost={editPost}
          handleModalClose={this.handleModalClose}
          modalOpen={modalOpen}
          text={text}
        />
      </Card>
    );
  }
}

Post.defaultProps = {
  comments: []
};

Post.propTypes = {
  _id: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired,
  authorId: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  comments: PropTypes.array,
  deleteComment: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  likers: PropTypes.array.isRequired,
  likesCount: PropTypes.number.isRequired,
  signedInUserId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  updatePostLikes: PropTypes.func.isRequired
};

export default withStyles(styles)(Post);
