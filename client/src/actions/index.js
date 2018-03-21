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
          password: 'That email is not registered'
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
