import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//material-ui
import { withStyles } from 'material-ui/styles';
//style components
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
//components
import MobileMenu from './MobileMenu';

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Header extends Component {
  renderContent() {
    const { auth } = this.props;
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <Button color="inherit" to="/signin" component={Link}>
              SIGN IN
            </Button>
            <Button color="inherit" to="/createaccount" component={Link}>
              CREATE AN ACCOUNT
            </Button>
          </div>
        );
      default:
        return [
          <a key="auth.id" href="/api/logout">
            <Button color="inherit">Logout</Button>
          </a>
        ];
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="sticky">
          <Toolbar>
            <Hidden smUp>
              <MobileMenu />
            </Hidden>

            <Hidden xsDown>
              <Typography
                variant="subheading"
                color="inherit"
                className={classes.flex}
                to="/"
                component={Link}
              >
                React + PassportJS Authentication
              </Typography>
              {this.renderContent()}
            </Hidden>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(withStyles(styles)(Header));
