import React from 'react';
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
  }
});

class Post extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { text, _id, classes, deletePost } = this.props;
    const { anchorEl } = this.state;
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
                    }
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          }
          title="Title of a post"
          subheader="Subheader of a post"
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
      </Card>
    );
  }
}

Post.propTypes = {
  _id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
};

export default withStyles(styles)(Post);
