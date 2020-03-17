import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../types';

export const signUpRequest = ({ phone, password, firstName, otherName }) => ({
  type: SIGN_UP_REQUEST,
  phone,
  password,
  firstName,
  otherName
});

export const signUpSuccess = ({ success }) => ({
  type: SIGN_UP_SUCCESS,
  success
});

export const signUpFailure = ({ error }) => ({
  type: SIGN_UP_FAILURE,
  error
});
