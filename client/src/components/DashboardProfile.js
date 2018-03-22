import React from 'react';
import { connect } from 'react-redux';
import DashboardDrawer from './DashboardDrawer';
import Typography from 'material-ui/Typography';

const DashboardProfile = ({ auth }) => {
	const renderConfirmation = () => {
		if (auth.confirmed === false) {
			return 'NOT CONFIRMED';
		} else {
			return 'CONFIRMED';
		}
	};
	return (
		<DashboardDrawer>
			<Typography
				noWrap>{`Hello! This is your profile. And you've registered with the email ${
				auth.email
			}`}</Typography>
			<Typography
				noWrap>{`You're account is: ${renderConfirmation()}`}</Typography>
			<Typography
				noWrap>{`Do you want to change your password? Check Settings`}</Typography>
		</DashboardDrawer>
	);
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(DashboardProfile);
