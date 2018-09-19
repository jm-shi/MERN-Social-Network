import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import { logoutUser } from '../actions/authActions';
import NavbarContainer from './NavbarContainer';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '400px',
    justifyContent: 'center',
    left: '50%',
    outline: 'none',
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%'
  }
});

const SettingsPage = ({ classes, logout }) => (
  <div>
    <NavbarContainer />
    <Paper className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={logout}
      >
        Log Out
      </Button>
    </Paper>
  </div>
);

SettingsPage.propTypes = {
  classes: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default compose(
  withStyles(styles),
  connect(
    undefined,
    mapDispatchToProps
  )
)(SettingsPage);
