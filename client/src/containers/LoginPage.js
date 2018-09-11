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
import { loginUser } from '../actions/authActions';

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
  }
});

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  /* eslint-disable react/destructuring-assignment, react/prop-types */
  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/');
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  };
  /* eslint-enable react/destructuring-assignment, react/prop-types */

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password
    };
    const { signInUser } = this.props;
    signInUser(user);
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant="headline">Log In</Typography>
            <form onSubmit={this.handleSubmit} noValidate>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  onChange={this.handleInputChange}
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
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

              <Button
                type="submit"
                fullWidth
                variant="raised"
                color="primary"
                className={classes.submit}
              >
                Log In
              </Button>
            </form>
            <Typography className={classes.footer} variant="body1">
              {"Don't have an account? "}
              <NavLink to="/signup" className={classes.link}>
                Sign Up
              </NavLink>
            </Typography>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

LoginPage.defaultProps = {
  errors: {}
};

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  errors: PropTypes.object,
  history: PropTypes.object.isRequired,
  signInUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.authReducer,
  errors: state.errorReducer
});

const mapDispatchToProps = dispatch => ({
  signInUser: user => dispatch(loginUser(user))
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(LoginPage);
