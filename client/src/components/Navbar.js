import React from 'react';
import './Navbar.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className="menuButton"
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography className="flex" variant="title" color="inherit">
              MERN Social
            </Typography>
            <div>
              <IconButton color="inherit">Jamie</IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
