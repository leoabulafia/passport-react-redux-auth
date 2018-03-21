import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
//style components
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import List from 'material-ui/List';
//icons
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  list: {
    width: 250
  },
  listFull: {
    width: 'auto'
  }
};

class MobileMenu extends Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>Item1</List>
        <Divider />
        <List>Item2</List>
      </div>
    );

    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={this.toggleDrawer('left', true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(MobileMenu);
