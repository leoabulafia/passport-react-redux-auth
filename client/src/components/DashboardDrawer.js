import React from 'react';
//components
import MobileMenu from './MobileMenu';
import DrawerList from './DrawerList';
//style components
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';

//icons

const drawerWidth = 240;

const styles = theme => ({
	root: {
		flexGrow: 1,
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%',
		height: 'calc(100vh - 64px)'
	},

	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
		[theme.breakpoints.up('xs')]: {
			position: 'relative'
		}
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3
	}
});

const DashboardDrawer = ({ classes, children }) => (
	<div className={classes.root}>
		<Hidden xsDown implementation="css">
			<Drawer
				variant="permanent"
				open
				classes={{
					paper: classes.drawerPaper
				}}>
				<DrawerList />
			</Drawer>
		</Hidden>
		<Hidden xsUp>
			<MobileMenu />
		</Hidden>
		<main className={classes.content}>{children}</main>
	</div>
);

export default withStyles(styles, { withTheme: true })(DashboardDrawer);
