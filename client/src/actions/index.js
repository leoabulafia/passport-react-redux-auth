import axios from 'axios';
import { SubmissionError } from 'redux-form';
import { FETCH_USER } from './types';

export const fetchUser = () => dispatch => {
	axios.get('/api/currentuser').then(res => {
		dispatch({ type: FETCH_USER, payload: res.data });
	});
};

export const createAccount = (values, history) => dispatch => {
	return new Promise((resolve, reject) => {
		axios.post('/auth/local', values).then(res => {
			if (res.data === false) {
				const errorSubmit = new SubmissionError({
					email: 'That email is already registered!'
				});
				reject(errorSubmit);
			} else {
				dispatch({ type: FETCH_USER, payload: res.data });
				history.push('/confirmemail');
				resolve();
			}
		});
	});
};

export const loginAccount = (values, history) => dispatch => {
	return new Promise((resolve, reject) => {
		axios.post('/auth/login', values).then(res => {
			if (res.data === false) {
				const errorSubmit = new SubmissionError({
					password: 'Email or password is invalid'
				});
				reject(errorSubmit);
			} else {
				dispatch({ type: FETCH_USER, payload: res.data });
				history.push('/dashboard');
				resolve();
			}
		});
	});
};

export const recoverAccount = (values, history) => dispatch => {
	return new Promise((resolve, reject) => {
		axios.post('/auth/recover', values).then(res => {
			console.log(res.data);
			if (res.data === false) {
				const errorSubmit = new SubmissionError({
					email: 'That email is not registered',
					_error: ' '
				});
				reject(errorSubmit);
			} else {
				dispatch({ type: FETCH_USER, payload: res.data });
				history.push('/recoveryemailsent');
				resolve();
			}
		});
	});
};

export const resetPassword = (values, history) => dispatch => {
	console.log(values);
	return new Promise((resolve, reject) => {
		axios.post('/auth/resetpassword', values).then(res => {
			if (res.data === false) {
				const errorSubmit = new SubmissionError({
					confirmpassword: 'Token invalid or expired',
					_error: ' '
				});
				reject(errorSubmit);
			} else {
				dispatch({ type: FETCH_USER, payload: res.data });
				history.push('/dashboard');
				resolve();
			}
		});
	});
};

export const changePassword = values => dispatch => {
	console.log('vals: ', values);
	return new Promise((resolve, reject) => {
		axios.post('/auth/changepassword', values).then(res => {
			if (res.data === false) {
				const errorSubmit = new SubmissionError({
					email: 'Error'
				});
				reject(errorSubmit);
			} else {
				dispatch({ type: FETCH_USER, payload: res.data });
				resolve();
			}
		});
	});
};

export const deleteAccount = values => dispatch => {
	console.log('vals: ', values);
	axios.post('/auth/delete', values).then(res => {
		dispatch({ type: FETCH_USER, payload: res.data });
	});
};
