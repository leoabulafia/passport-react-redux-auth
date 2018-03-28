import React from 'react';
import DashboardDrawer from './DashboardDrawer';
import Typography from 'material-ui/Typography';

export default props => (
	<DashboardDrawer>
		<Typography variant="headline">Welcome to the Dashboard.</Typography>
		<Typography variant="subheading">
			Check your profile, settings, or visit the github repository.
		</Typography>
	</DashboardDrawer>
);
