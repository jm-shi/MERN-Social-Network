import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';

import UserAvatar from './UserAvatar';

const styles = theme => ({
  button: {
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit
  },
  cardHeader: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  cardHeaderTitle: {
    display: 'flex'
  },
  commentField: {
    width: '90%',
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit
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

class Comments extends Component {
  state = {
    text: ''
  };

  handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    this.setState(() => ({ text: value }));
  };

  postComment = (e) => {
    e.preventDefault();
    console.log('post comment');
  };

  render() {
    const { classes } = this.props;

    const createCommentBody = commentData => (
      <div className={classes.commentContent}>
        <div className={classes.commenter}>{commentData.name}</div>
        <div className={classes.timestamp}>{commentData.timestamp}</div>
        <div className={classes.commentText}>{commentData.text}</div>
      </div>
    );

    return (
      <div>
        <hr />
        <CardHeader
          className={classes.cardHeader}
          title={
            <div className={classes.cardHeaderTitle}>
              <UserAvatar
                author="testAuthor"
                authorId="testID"
                avatarColor={8}
              />
              <TextField
                multiline
                placeholder="Write a comment"
                className={classes.commentField}
                onChange={this.handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.postComment}
              >
                <SendIcon />
              </Button>
            </div>
          }
        />
        <CardHeader
          avatar={
            <UserAvatar author="John Doe" authorId="testID" avatarColor={6} />
          }
          title={createCommentBody({
            name: 'John Doe',
            timestamp: 'Three days ago',
            text: 'Hello, just testing.'
          })}
          className={classes.cardHeader}
        />
        <CardHeader
          avatar={
            <UserAvatar
              author="anotherTestAuthor"
              authorId="testID"
              avatarColor={9}
            />
          }
          title={
            <div className={classes.commentContent}>
              <div className={classes.commenter}>Bob Jones</div>
              <div className={classes.timestamp}>An hour ago</div>
              <div className={classes.commentText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          }
          className={classes.cardHeader}
        />
        <br />
      </div>
    );
  }
}

Comments.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Comments);
