import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

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
  avatar: {
    backgroundColor: red[800]
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
    console.log('open modal');
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    console.log('POST PROPS', this.props);

    const { text, _id, author, classes, deletePost, updatePost } = this.props;
    const { anchorEl, modalOpen } = this.state;
    const open = Boolean(anchorEl);

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Initials" className={classes.avatar}>
              JS
            </Avatar>
          }
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
          title="Name of poster"
          subheader="10 minutes ago"
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

        <Button onClick={this.handleModalOpen}>Open Modal</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={modalOpen}
          onClose={this.handleModalClose}
        >
          <div className={classes.paper}>
            <Typography variant="title" id="modal-title">
              Edit this post
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              {text}
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
  author: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired
};

export default withStyles(styles)(Post);
