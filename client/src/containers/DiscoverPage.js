import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loading from '../components/Loading';
import NavbarContainer from './NavbarContainer';
import UserAvatar from '../components/UserAvatar';
import { getAllUsers } from '../actions/userActions';

export class DiscoverPage extends Component {
  state = {
    loading: true,
    users: []
  };

  componentDidMount = () => {
    const { history, retrieveAllUsers } = this.props;
    if (!localStorage.jwtToken) {
      history.push('/login');
    }

    retrieveAllUsers().then((res) => {
      const users = res.payload;
      this.setState({
        loading: false,
        users
      });
    });
  };

  render() {
    const { loading, users } = this.state;
    console.log('users', users);
    return loading ? (
      <Loading />
    ) : (
      <div>
        <NavbarContainer />
        {users.map(user => (
          <UserAvatar
            author={user.name}
            authorId={user._id}
            avatarColor={user.avatarColor}
            key={user._id}
          />
        ))}
      </div>
    );
  }
}

DiscoverPage.propTypes = {
  history: PropTypes.object.isRequired,
  retrieveAllUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.authReducer
});

const mapDispatchToProps = dispatch => ({
  retrieveAllUsers: () => dispatch(getAllUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverPage);
