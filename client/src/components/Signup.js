import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import compose from 'recompose/compose';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { registerUser } from '../actions/authActions';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: theme.spacing.unit * 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: theme.spacing.unit * 50,
    backgroundColor: 'theme.palette.background.paper',
    boxShadow: theme.shadows[5]
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  link: {
    textDecoration: 'none'
  },
  footer: {
    marginTop: theme.spacing.unit * 2
  }
});

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    const user = {
      name,
      email,
      password
    };
    const { history, createUser } = this.props;
    console.log('handle submit');
    createUser(user, history);
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">Sign Up</Typography>
            <form onSubmit={this.handleSubmit}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input
                  onChange={this.handleInputChange}
                  id="name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  onChange={this.handleInputChange}
                  id="email"
                  name="email"
                  autoComplete="email"
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  onChange={this.handleInputChange}
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
              >
                Create Account
              </Button>
            </form>
            <Typography className={classes.footer} variant="body1">
              {'Already have an account? '}
              <NavLink to="/login" className={classes.link}>
                Log In
              </NavLink>
            </Typography>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
  createUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  createUser: (user, history) => dispatch(registerUser(user, history))
});

export default compose(
  withStyles(styles),
  connect(
    undefined,
    mapDispatchToProps
  )
)(Signup);
