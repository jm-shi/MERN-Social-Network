import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import { FolderListItems, OtherFolderListItems } from './MenuItems';

const styles = theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  },
  toolbar: theme.mixins.toolbar
});

class NavbarLeftMenu extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = open => () => {
    this.setState({
      left: open
    });
  };

  render() {
    const { classes, user } = this.props;
    const { left } = this.state;

    const sideList = (
      <div className={classes.list}>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <FolderListItems user={user} />
        </List>
        <Divider />
        <List>{OtherFolderListItems}</List>
      </div>
    );

    return (
      <div>
        <MenuIcon onClick={this.toggleDrawer(true)} />
        <Drawer open={left} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

NavbarLeftMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withStyles(styles)(NavbarLeftMenu);
