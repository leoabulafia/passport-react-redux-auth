import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import DashboardDrawer from './DashboardDrawer';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class DashboardProfile extends Component {
	handleRefresh = () => {
		this.props.fetchUser();
	};
	renderConfirmation() {
		const { auth } = this.props;
		if (auth.confirmed === false) {
			return 'NOT CONFIRMED. Check your Inbox for an email confirmation.';
		} else {
			return 'CONFIRMED';
		}
	}
	renderMail() {
		const { auth } = this.props;
		if (!auth.email) {
			if (auth.googleId) {
				return 'a Google account.';
			} else if (auth.facebookId) {
				return 'a Facebook account.';
			}
		} else {
			return `the email address ${auth.email}`;
		}
	}
	render() {
		return (
			<DashboardDrawer>
				<Typography variant="headline" style={{ marginBottom: '1em' }}>
					Hello! This is your profile.
				</Typography>
				<Typography variant="subheading" style={{ marginBottom: '0.5em' }}>
					{`You've registered with ${this.renderMail()}`}
				</Typography>
				<Typography
					variant="subheading"
					style={{
						marginBottom: '0.3em'
					}}>{`You're account is: ${this.renderConfirmation()}`}</Typography>
				<Typography variant="subheading">
					Already confirmed? Click refresh. It can take up a minute after the
					confirmation link is clicked{' '}
					<Button onClick={this.handleRefresh}>Refresh</Button>
				</Typography>
			</DashboardDrawer>
		);
	}
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { fetchUser })(DashboardProfile);
