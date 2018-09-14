import React from 'react';
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

const UserCard = ({ classes, user }) => (
  <Card>
    <div className={classNames(classes.container, classes.avatar)}>
      <UserAvatar
        author={user.name}
        authorId={user._id}
        avatarColor={user.avatarColor}
        key={user._id}
      />
    </div>
    <div className={classNames(classes.container, classes.cardContent)}>
      <Typography
        gutterBottom
        className={classes.name}
        variant="headline"
        component="h2"
      >
        {user.name}
      </Typography>
      <CardActions>
        <Link className={classes.link} to={`/profile/${user._id}`}>
          <Button size="small" color="primary">
            View Profile
          </Button>
        </Link>
        <Button size="small" color="primary">
          Friend Request
        </Button>
      </CardActions>
    </div>
  </Card>
);

UserCard.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    avatarColor: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(styles)(UserCard);
