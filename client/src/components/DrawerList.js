import React from 'react';
import { Link } from 'react-router-dom';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
//icons
import DashboardIcon from 'material-ui-icons/Dashboard';
import SettingsIcon from 'material-ui-icons/Settings';
import AccountCircle from 'material-ui-icons/AccountCircle';
import GithubCircle from 'mdi-material-ui/GithubCircle';
import LogoutIcon from 'mdi-material-ui/Logout';

export default () => (
	<div>
		<List>
			<ListItem button component={Link} to="/dashboard">
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary="Dashboard" />
			</ListItem>
			<ListItem button component={Link} to="/profile">
				<ListItemIcon>
					<AccountCircle />
				</ListItemIcon>
				<ListItemText primary="Profile" />
			</ListItem>
			<ListItem button component={Link} to="/settings">
				<ListItemIcon>
					<SettingsIcon />
				</ListItemIcon>
				<ListItemText primary="Settings" />
			</ListItem>
			<ListItem
				button
				component="a"
				href="https://github.com/leoabulafia/multilingual-react"
				target="_blank"
				rel="noopener noreferrer">
				<ListItemIcon>
					<GithubCircle />
				</ListItemIcon>
				<ListItemText primary="Github" />
			</ListItem>
		</List>
		<Divider />
		<List>
			<List component="nav">
				<ListItem button component="a" href="/api/logout">
					<ListItemIcon>
						<LogoutIcon />
					</ListItemIcon>
					<ListItemText primary="Logout" />
				</ListItem>
			</List>
		</List>
	</div>
);
