import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';
import lightBlue from '@material-ui/core/colors/lightBlue';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import yellow from '@material-ui/core/colors/yellow';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import brown from '@material-ui/core/colors/brown';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';

class UserAvatar extends Component {
  state = {
    avatarColor: 18,
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

  render() {
    const { authorId } = this.props;
    const { avatarColor, name } = this.state;

    const colorArr = [
      red,
      pink,
      purple,
      deepPurple,
      indigo,
      lightBlue,
      blue,
      cyan,
      teal,
      green,
      lightGreen,
      lime,
      yellow,
      amber,
      orange,
      deepOrange,
      brown,
      grey,
      blueGrey
    ];
    return (
      <Link style={{ textDecoration: 'none' }} to={`/profile/${authorId}`}>
        <Avatar
          aria-label="Initials"
          style={{
            backgroundColor: `${colorArr[avatarColor][800]}`
          }}
        >
          {name.charAt(0).toUpperCase()}
        </Avatar>
      </Link>
    );
  }
}

UserAvatar.propTypes = {
  authorId: PropTypes.string.isRequired,
  getUser: PropTypes.func.isRequired
};

export default UserAvatar;
