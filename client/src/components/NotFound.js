import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import NavbarContainer from '../containers/NavbarContainer';

const styles = {
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
};

const NotFound = ({ classes }) => (
  <div>
    <NavbarContainer />
    <Paper className={classes.container}>
      <Typography variant="display4">404</Typography>
      <Typography variant="headline">Page Not Found</Typography>
      <Typography variant="subheading">
        Sorry, the page you are looking for seems to be missing.
      </Typography>
    </Paper>
  </div>
);

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);
