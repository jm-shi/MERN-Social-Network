// import axios from 'axios';
import * as types from './actionTypes';

export const getPosts = () => ({
  type: types.GET_POSTS
});

export const createPost = (id, text) => ({
  type: types.CREATE_POST,
  id,
  text
});

export const deletePost = id => ({
  type: types.DELETE_POST,
  id
});
