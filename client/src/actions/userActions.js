import axios from 'axios';
import { GET_ERRORS, GET_USER, GET_ALL_USERS } from './actionTypes';

export const getUser = userId => async (dispatch) => {
  try {
    const result = await axios.get(`/users/profile/${userId}`);
    return dispatch({
      type: GET_USER,
      payload: result.data
    });
  } catch (err) {
    return dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const result = await axios.get('/users');
    return dispatch({
      type: GET_ALL_USERS,
      payload: result.data
    });
  } catch (err) {
    return dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
