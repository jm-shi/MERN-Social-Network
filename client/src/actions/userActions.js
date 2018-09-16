import axios from 'axios';
import {
  FOLLOW_USER,
  GET_FOLLOWING,
  GET_USER,
  GET_ALL_USERS,
  UNFOLLOW_USER
} from './actionTypes';

export const followUser = (signedInUserId, idToFollow) => async (dispatch) => {
  const result = await axios.patch(`/users/following/${signedInUserId}`, {
    idToFollow
  });
  return dispatch({
    type: FOLLOW_USER,
    payload: result.data
  });
};

export const unfollowUser = (
  signedInUserId,
  idToUnfollow
) => async (dispatch) => {
  const result = await axios.patch(`/users/unfollowing/${signedInUserId}`, {
    idToUnfollow
  });
  return dispatch({
    type: UNFOLLOW_USER,
    payload: result.data
  });
};

export const getFollowing = userId => async (dispatch) => {
  const result = await axios.get(`/users/${userId}`);
  return dispatch({
    type: GET_FOLLOWING,
    payload: result.data
  });
};

export const getUser = userId => async (dispatch) => {
  const result = await axios.get(`/users/${userId}`);
  // dispatch({
  //   type: GET_FOLLOWING,
  //   payload: result.data
  // });
  return dispatch({
    type: GET_USER,
    payload: result.data
  });
};

export const getAllUsers = () => async (dispatch) => {
  const result = await axios.get('/users');
  return dispatch({
    type: GET_ALL_USERS,
    payload: result.data
  });
};
