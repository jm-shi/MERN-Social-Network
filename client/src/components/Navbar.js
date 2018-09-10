import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import NavbarLeftMenu from './NavbarLeftMenu';
import NavbarRightMenu from './NavbarRightMenu';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Navbar extends Component {
  render() {
    const { classes, logoutUser } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <NavbarLeftMenu />
            </IconButton>
            <Typography
              className={classes.flex}
              variant="title"
              color="inherit"
            >
              MERN Social
            </Typography>
            <div>
              <NavbarRightMenu logoutUser={logoutUser} />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

export default withStyles(styles)(Navbar);
