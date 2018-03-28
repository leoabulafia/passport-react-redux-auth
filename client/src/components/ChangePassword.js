import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { changePassword } from '../actions';
import { resetPasswordFields } from './utilities/formFields';
import { validateErrors } from './utilities/validateErrors';
//components
import AuthField from './AuthField';
import Button from 'material-ui/Button';
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	withMobileDialog
} from 'material-ui/Dialog';
import LockIcon from 'material-ui-icons/Lock';
import DoneIcon from 'material-ui-icons/Done';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const styles = {
	formStyle: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column'
	},
	loginButton: {
		borderRadius: '40px',
		margin: '20px 0 10px 0',
		width: '90%'
	}
};

class ChangePassword extends React.Component {
	state = {
		open: false,
		secondDialog: false
	};

	openSuccessDialog = () => {
		this.setState({ secondDialog: true });
	};

	closeSuccessDialog = () => {
		this.setState({ secondDialog: false });
		this.props.history.push('/dashboard');
	};

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	renderFields() {
		return resetPasswordFields.map(({ label, name, type }) => {
			return (
				<Field
					formFieldsType={type}
					key={name}
					component={AuthField}
					label={label}
					name={name}
				/>
			);
		});
	}

	render() {
		const {
			auth,
			fullScreen,
			handleSubmit,
			changePassword,
			error
		} = this.props;

		return (
			<div>
				<ListItem
					onClick={this.handleClickOpen}
					component={Button}
					style={{ maxWidth: '300px' }}>
					<ListItemIcon>
						<LockIcon />
					</ListItemIcon>
					<ListItemText primary="Change password" />
				</ListItem>
				<Dialog
					fullScreen={fullScreen}
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="responsive-dialog-title">
					<DialogTitle id="responsive-dialog-title">
						{'Change your password'}
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Please, create a new password and confirm it
						</DialogContentText>

						<form
							style={styles.formStyle}
							onSubmit={handleSubmit(data => {
								data.id = auth._id;
								return changePassword(data);
							})}>
							{this.renderFields()}
							{error && <strong> {error} </strong>}
							<DialogActions
								style={{ justifyContent: 'center', width: '100%' }}>
								<Button
									onClick={this.openSuccessDialog}
									style={styles.loginButton}
									variant="raised"
									color="primary"
									type="submit">
									Reset password
									<DoneIcon />
								</Button>
								<Dialog
									fullScreen={fullScreen}
									onClose={this.closeSuccessDialog}
									open={this.state.secondDialog}
									aria-labelledby="responsive-dialog-title">
									<DialogTitle id="simple-dialog-title">
										{'Password changed succesfully!'}
									</DialogTitle>
									<DialogContent>
										<DialogContentText>
											You've successfully changed your password
										</DialogContentText>
									</DialogContent>
									<DialogActions>
										<Button
											onClick={this.closeSuccessDialog}
											color="primary"
											autoFocus>
											Ok
										</Button>
									</DialogActions>
								</Dialog>
							</DialogActions>
						</form>
					</DialogContent>
				</Dialog>
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { changePassword })(
	reduxForm({
		validate: validateErrors,
		form: 'changePassword'
	})(withMobileDialog()(ChangePassword))
);
