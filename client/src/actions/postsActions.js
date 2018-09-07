import axios from 'axios';
import * as types from './actionTypes';

export const getPosts = () => dispatch =>
  axios.get('/posts').then((res) => {
    dispatch({
      type: types.GET_POSTS,
      payload: res.data
    });
  });

export const createPost = text => dispatch =>
  axios.post('/posts', { text, author: 'unidentified' }).then((res) => {
    dispatch({
      type: types.CREATE_POST,
      payload: res.data
    });
  });

export const updatePost = (id, text, author) => dispatch =>
  axios.patch(`/posts/${id}`, { id, text, author }).then((res) => {
    dispatch({
      type: types.UPDATE_POST,
      id,
      text,
      author
    });
  });

export const deletePost = id => dispatch =>
  axios.delete(`/posts/${id}`).then((res) => {
    dispatch({
      type: types.DELETE_POST,
      id
    });
  });
