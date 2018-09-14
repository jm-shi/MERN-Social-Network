import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  progress: {
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%,-50%)'
  }
};

const NotFound = ({ classes }) => (
  <div className={classes.progress}>
    <CircularProgress className={classes.l} size={50} />
  </div>
);

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);
