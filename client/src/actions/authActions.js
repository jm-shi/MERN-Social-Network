// Authentication is based on Krunal's guide:
// https://appdividend.com/2018/07/18/react-redux-node-mongodb-jwt-authentication/#React_Redux_Node_MongoDB_JWT_Authentication

import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../setAuthToken';
import * as types from './actionTypes';

export const registerUser = (user, history) => (dispatch) => {
  axios
    .post('/users/signup', user)
    .then((res) => {
      history.push('/login');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loginUser = user => (dispatch) => {
  axios
    .post('/users/login', user)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setCurrentUser = decoded => ({
  type: types.SET_CURRENT_USER,
  payload: decoded
});
