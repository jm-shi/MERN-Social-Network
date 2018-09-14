import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import compose from 'recompose/compose';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { getAllUsers } from '../actions/userActions';
import NavbarContainer from './NavbarContainer';
import Loading from '../components/Loading';
import UserCard from '../components/UserCard';

const styles = theme => ({
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  layout: {
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }
  }
});

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
    const { classes } = this.props;
    const { loading, users } = this.state;

    return loading ? (
      <Loading />
    ) : (
      <div>
        <NavbarContainer />
        <main>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            <Grid container justify="center" spacing={40}>
              {users.map(user => (
                <Grid item key={user._id} sm={6} md={3} lg={2}>
                  <UserCard user={user} />
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
      </div>
    );
  }
}

DiscoverPage.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  retrieveAllUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.authReducer
});

const mapDispatchToProps = dispatch => ({
  retrieveAllUsers: () => dispatch(getAllUsers())
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(DiscoverPage);
