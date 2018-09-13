import axios from 'axios';
import { GET_ERRORS, GET_USER } from './actionTypes';

/* eslint-disable import/prefer-default-export */
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
/* eslint-enable import/prefer-default-export */
