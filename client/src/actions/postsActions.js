// import axios from 'axios';
import * as types from './actionTypes';

export const getPosts = () => ({
  type: types.GET_POSTS
});

export const createPost = text => ({
  type: types.CREATE_POST,
  text
});
