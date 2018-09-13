import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import NavbarLeftMenu from './NavbarLeftMenu';
import NavbarRightMenu from './NavbarRightMenu';

const styles = {
  flex: {
    flexGrow: 1
  },
  logo: {
    color: '#fff',
    textDecoration: 'none'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  root: {
    flexGrow: 1
  }
};

class Navbar extends Component {
  render() {
    const { classes, logoutUser, user } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <NavbarLeftMenu user={user} />
            </IconButton>
            <Typography
              className={classes.flex}
              variant="title"
              color="inherit"
            >
              <Link className={classes.logo} to="/">
                MERN Social
              </Link>
            </Typography>
            <div>
              <NavbarRightMenu logoutUser={logoutUser} user={user} />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
