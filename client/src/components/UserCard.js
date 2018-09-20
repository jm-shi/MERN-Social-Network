import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import UserAvatar from './UserAvatar';

const styles = theme => ({
  avatar: {
    paddingTop: theme.spacing.unit * 2
  },
  cardContent: {
    flexDirection: 'column'
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  link: {
    textDecoration: 'none'
  },
  name: {
    marginTop: theme.spacing.unit * 2,
    textAlign: 'center'
  }
});

class UserCard extends Component {
  followThisUser = (signedInUserId, listedUserId) => {
    const { followUser } = this.props;
    followUser(signedInUserId, listedUserId);
  };

  unfollowThisUser = (signedInUserId, listedUserId) => {
    const { unfollowUser } = this.props;
    unfollowUser(signedInUserId, listedUserId);
  };

  render() {
    const {
      classes,
      getUser,
      isFollowing,
      listedUser,
      signedInUser
    } = this.props;

    return (
      <Card>
        <div className={classNames(classes.container, classes.avatar)}>
          <UserAvatar
            author={listedUser.name}
            authorId={listedUser._id}
            avatarColor={listedUser.avatarColor}
            getUser={getUser}
            key={listedUser._id}
          />
        </div>
        <div className={classNames(classes.container, classes.cardContent)}>
          <Typography
            gutterBottom
            className={classes.name}
            variant="headline"
            component="h2"
          >
            {listedUser.name}
          </Typography>
          <CardActions>
            <Link className={classes.link} to={`/profile/${listedUser._id}`}>
              <Button size="small" color="primary">
                View
              </Button>
            </Link>
            <Button
              size="small"
              color="primary"
              onClick={() =>
                (isFollowing
                  ? this.unfollowThisUser(signedInUser.userId, listedUser._id)
                  : this.followThisUser(signedInUser.userId, listedUser._id))
              }
            >
              {isFollowing ? 'Unfollow' : 'Follow'}
            </Button>
          </CardActions>
        </div>
      </Card>
    );
  }
}

UserCard.propTypes = {
  classes: PropTypes.object.isRequired,
  followUser: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  unfollowUser: PropTypes.func.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  listedUser: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    avatarColor: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  signedInUser: PropTypes.shape({
    userId: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(UserCard);
