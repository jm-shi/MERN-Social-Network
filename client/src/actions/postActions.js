// import axios from 'axios';
import * as types from './actionTypes';

export const getPost = () => ({
  type: types.GET_POST
});

export const createPost = text => ({
  type: types.CREATE_POST,
  text
});
