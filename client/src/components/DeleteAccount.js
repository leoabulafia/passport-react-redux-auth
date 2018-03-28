import React from 'react';
import { connect } from 'react-redux';
import { deleteAccount } from '../actions';
import Button from 'material-ui/Button';
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	withMobileDialog
} from 'material-ui/Dialog';
import DeleteForeverIcon from 'material-ui-icons/DeleteForever';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

class DeleteAccount extends React.Component {
	state = {
		open: false
	};

	handleDelete = () => {
		console.log('available props: ', this.props);
		this.props.deleteAccount(this.props.auth);
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { fullScreen } = this.props;

		return (
			<div>
				<ListItem
					onClick={this.handleClickOpen}
					component={Button}
					style={{ maxWidth: '300px' }}>
					<ListItemIcon>
						<DeleteForeverIcon />
					</ListItemIcon>
					<ListItemText primary="Delete account" />
				</ListItem>{' '}
				<Dialog
					fullScreen={fullScreen}
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="responsive-dialog-title">
					<DialogTitle id="responsive-dialog-title">
						{'Are you completely sure that you want to delete your account?'}
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Your account will be removed from the database.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
						</Button>
						<Button onClick={this.handleDelete} color="primary" autoFocus>
							Yes, I'm sure
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { deleteAccount })(
	withMobileDialog()(DeleteAccount)
);
