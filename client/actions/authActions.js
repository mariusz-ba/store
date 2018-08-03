import * as TYPES from './constants/authConstants';
import axios from 'axios';
import setAuthorizationToken from 'utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

export const requestSignin = (credentials) => ({
  type: TYPES.REQUEST_SIGNIN,
  payload: credentials
})

export const signIn = (credentials) => {
  return async dispatch => {
    dispatch(requestSignin(credentials));
    try {
      const res = await axios.post('/api/auth', credentials);
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwt.decode(token)));
      return Promise.resolve(jwt.decode(token));
    } catch (e) {
      dispatch(setAuthErrors(e.response.data.errors))
    }
  }
}

export const setCurrentUser = (user) => ({
  type: TYPES.SET_CURRENT_USER,
  payload: user
})

export const setAuthErrors = (errors) => ({
  type: TYPES.SET_AUTH_ERRORS,
  payload: errors
})

export const signOut = () => {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    // set authorization token
    setAuthorizationToken(null);
    dispatch(onSignOut());
    return Promise.resolve();
  }
}

export const onSignOut = () => ({
  type: TYPES.SIGN_OUT
})