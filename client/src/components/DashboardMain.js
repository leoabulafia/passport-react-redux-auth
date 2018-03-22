import React from 'react';
import DashboardDrawer from './DashboardDrawer';
import Typography from 'material-ui/Typography';

export default props => (
	<DashboardDrawer>
		<Typography noWrap>
			{'Welcome to the Dashboard. Check your profile!'}
		</Typography>
	</DashboardDrawer>
);
