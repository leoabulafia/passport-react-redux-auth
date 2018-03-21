import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { fetchUser } from '../actions';
//components
import ConfirmEmail from './ConfirmEmail';
import CreateAccount from './CreateAccount';
import Dashboard from './Dashboard';
import EmailConfirmed from './EmailConfirmed';
import Header from './Header';
import ForgotPassword from './ForgotPassword';
import Landing from './Landing';
import RecoveryEmailSent from './RecoveryEmailSent';
import ResetPassword from './ResetPassword';
import SignIn from './SignIn';
//helpers
import PrivateRoute from './utilities/PrivateRoute';
import LoginRoute from './utilities/LoginRoute';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <LoginRoute exact path="/" component={Landing} />
          <Route exact path="/createaccount" component={CreateAccount} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route
            exact
            path="/recoveryemailsent"
            component={RecoveryEmailSent}
          />
          <Route exact path="/resetpassword" component={ResetPassword} />
          <Route exact path="/emailconfirmed" component={EmailConfirmed} />
          <PrivateRoute exact path="/confirmemail" component={ConfirmEmail} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { fetchUser })(App);