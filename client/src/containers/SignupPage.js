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
  },
  errorText: {
    color: '#D50000',
    marginTop: '5px'
  },
  successText: {
    color: '#32971E',
    marginTop: '10px',
    textDecoration: 'none'
  }
});

class SignupPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    errors: {},
    successfulSignup: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors.success) {
      this.setState({
        successfulSignup: true
      });
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, passwordConfirm } = this.state;
    const user = {
      name,
      email,
      password,
      passwordConfirm
    };
    const { createUser } = this.props;
    createUser(user);
  };

  render() {
    const { classes } = this.props;
    const { errors, successfulSignup } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">Sign Up</Typography>
            {successfulSignup && (
              <NavLink to="/login" className={classes.successText}>
                Successfully signed up! Click here to log in.
              </NavLink>
            )}
            <form onSubmit={this.handleSubmit} noValidate>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input
                  onChange={this.handleInputChange}
                  id="name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  error={!!errors.name}
                />
                <span className={classes.errorText}>{errors.name}</span>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  onChange={this.handleInputChange}
                  id="email"
                  name="email"
                  autoComplete="email"
                  error={!!errors.email}
                />
                <span className={classes.errorText}>{errors.email}</span>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  onChange={this.handleInputChange}
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={!!errors.password}
                />
                <span className={classes.errorText}>{errors.password}</span>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Confirm Password</InputLabel>
                <Input
                  onChange={this.handleInputChange}
                  name="passwordConfirm"
                  type="password"
                  id="passwordConfirm"
                  autoComplete="current-password-confirm"
                  error={!!errors.passwordConfirm}
                />
                <span className={classes.errorText}>
                  {errors.passwordConfirm || errors.error}
                </span>
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

SignupPage.defaultProps = {
  errors: {}
};

SignupPage.propTypes = {
  classes: PropTypes.object.isRequired,
  createUser: PropTypes.func.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.authReducer,
  errors: state.errorReducer
});

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(registerUser(user))
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignupPage);
