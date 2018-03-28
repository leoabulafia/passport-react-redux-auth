import React from 'react';
//components
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import DashboardDrawer from './DashboardDrawer';
import Typography from 'material-ui/Typography';

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	}
});

const DashboardSettings = (props, classes) => (
	<DashboardDrawer>
		<Typography variant="headline" style={{ marginBottom: '1em' }}>
			Settings
		</Typography>
		<div className={classes.root}>
			<List>
				<ChangePassword />
				<DeleteAccount />
			</List>
		</div>
	</DashboardDrawer>
);

export default withStyles(styles)(DashboardSettings);
