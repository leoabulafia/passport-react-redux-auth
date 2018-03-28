import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import { resetPasswordFields } from './utilities/formFields';
import { validateErrors } from './utilities/validateErrors';
//components
import AuthField from './AuthField';
import PaperContainer from './utilities/PaperContainer';
//styles
import Button from 'material-ui/Button';
import Done from 'material-ui-icons/Done';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

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

class ResetPassword extends Component {
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
		const { error, handleSubmit, resetPassword, history, match } = this.props;
		return (
			<PaperContainer>
				<Typography variant="headline" component="h3" align="center">
					Reset your password
				</Typography>
				<Divider style={{ margin: '2em 0' }} />
				<Typography
					style={{
						paddingLeft: '16px',
						paddingRight: '16px',
						marginTop: '15px'
					}}
					variant="subheading">
					Please, create a new password and confirm it
				</Typography>
				<form
					style={styles.formStyle}
					onSubmit={handleSubmit(data => {
						const token = match.params.token;
						console.log(token);
						data.token = token;
						return resetPassword(data, history);
					})}>
					{this.renderFields()}
					{error && (
						<strong>
							{error}
							<Typography
								style={{
									paddingLeft: '16px',
									paddingRight: '16px',
									marginTop: '15px'
								}}
								variant="subheading">
								Password reset tokens are valid for only 24 hours after request,
								but you can{' '}
								<Link
									to="/forgotpassword"
									style={{
										color: 'rgba(0, 0, 0, 0.87)',
										textDecoration: 'underline'
									}}>
									request a new one and get right back to your account.
								</Link>
							</Typography>
						</strong>
					)}
					<Button
						style={styles.loginButton}
						variant="raised"
						color="primary"
						type="submit">
						Reset password
						<Done />
					</Button>
				</form>
			</PaperContainer>
		);
	}
}

export default connect(null, actions)(
	reduxForm({
		validate: validateErrors,
		form: 'resetPassword'
	})(withRouter(ResetPassword))
);
