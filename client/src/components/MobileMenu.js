import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import DrawerList from "./DrawerList";
import Drawer from "material-ui/Drawer";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

const styles = {
  list: {
    width: 250
  },
  listFull: {
    width: "auto"
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

    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={this.toggleDrawer("left", true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            <DrawerList />
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(MobileMenu);
