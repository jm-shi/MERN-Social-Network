import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import UpdatePost from '../containers/UpdatePost';
import UserAvatar from './UserAvatar';

const options = ['Edit', 'Delete'];
const ITEM_HEIGHT = 48;

const styles = theme => ({
  card: {
    margin: '20px auto',
    width: '95%'
  },
  actions: {
    display: 'flex'
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: '50%',
    left: '50%',
    outline: 'none',
    transform: 'translate(-50%, -50%)'
  },
  spacing: {
    marginBottom: '10px'
  }
});

class Post extends Component {
  state = {
    anchorEl: null,
    modalOpen: false
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
      text,
      _id,
      author,
      avatarColor,
      timestamp,
      classes,
      deletePost,
      updatePost
    } = this.props;
    const { anchorEl, modalOpen } = this.state;
    const open = Boolean(anchorEl);
    const relativeTime = moment(timestamp).fromNow();

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={<UserAvatar author={author} avatarColor={avatarColor} />}
          action={
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
                      this.handleClose()
                      || (option === 'Delete' ? deletePost(_id) : null)
                      || (option === 'Edit' ? this.handleModalOpen() : null)
                    }
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          }
          title={author}
          subheader={relativeTime}
        />
        <CardContent>
          <Typography>{text}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Like">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>

        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          open={modalOpen}
          onClose={this.handleModalClose}
        >
          <div className={classes.paper}>
            <Typography
              variant="title"
              id="modal-title"
              className={classes.spacing}
            >
              Edit this post
            </Typography>
            <Typography variant="subheading" id="modal-description">
              <UpdatePost
                id={_id}
                text={text}
                author={author}
                updatePost={updatePost}
                handleModalClose={this.handleModalClose}
              />
            </Typography>
          </div>
        </Modal>
      </Card>
    );
  }
}

Post.propTypes = {
  _id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  avatarColor: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired
};

export default withStyles(styles)(Post);
