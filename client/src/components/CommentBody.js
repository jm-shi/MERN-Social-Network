import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';

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
    loading: true,
    name: ''
  };

  componentDidMount = () => {
    const { commenterId, getUser } = this.props;
    getUser(commenterId).then((res) => {
      this.setState({
        avatarColor: res.payload.user.avatarColor,
        loading: false,
        name: res.payload.user.name
      });
    });
  };

  render() {
    const { classes, commenterId, timestamp, text } = this.props;
    const { avatarColor, loading, name } = this.state;

    return loading ? (
      <div />
    ) : (
      <CardHeader
        avatar={
          <UserAvatar
            author={name}
            authorId={commenterId}
            avatarColor={avatarColor}
          />
        }
        title={
          <div className={classes.commentContent}>
            <div className={classes.commenter}>{name}</div>
            <div className={classes.timestamp}>
              {moment(timestamp).fromNow()}
            </div>
            <div className={classes.commentText}>{text}</div>
          </div>
        }
        className={classes.cardHeader}
      />
    );
  }
}

CommentBody.propTypes = {
  classes: PropTypes.object.isRequired,
  commenterId: PropTypes.string.isRequired,
  getUser: PropTypes.func.isRequired,
  timestamp: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles)(CommentBody);
