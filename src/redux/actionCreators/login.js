import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../types';

export const loginRequest = ({ phone, password }) => ({
  type: LOGIN_REQUEST,
  phone,
  password
});

export const loginSuccess = ({ success, token }) => ({
  type: LOGIN_SUCCESS,
  success,
  token
});

export const loginFailure = ({ error }) => ({
  type: LOGIN_FAILURE,
  error
});
