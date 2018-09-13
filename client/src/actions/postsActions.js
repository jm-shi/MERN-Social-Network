import axios from 'axios';
import {
  GET_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST
} from './actionTypes';

export const getPosts = () => dispatch =>
  axios.get('/posts').then((res) => {
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  });

export const createPost = (text, user) => dispatch =>
  axios
    .post('/posts', {
      text,
      author: user.name,
      authorId: user.userId,
      avatarColor: user.avatarColor
    })
    .then((res) => {
      dispatch({
        type: CREATE_POST,
        payload: res.data
      });
    });

export const updatePost = (id, text, author) => dispatch =>
  axios.patch(`/posts/${id}`, { id, text, author }).then((res) => {
    dispatch({
      type: UPDATE_POST,
      id,
      text,
      author
    });
  });

export const deletePost = id => dispatch =>
  axios.delete(`/posts/${id}`).then((res) => {
    dispatch({
      type: DELETE_POST,
      id
    });
  });
