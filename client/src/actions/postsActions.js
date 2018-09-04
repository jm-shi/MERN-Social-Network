import axios from 'axios';
import * as types from './actionTypes';

export const getPosts = () => dispatch =>
  axios.get('/api/posts').then(res => {
    console.log('postsActions.js: getPosts response.data:', res.data);
    return dispatch({
      type: types.GET_POSTS,
      payload: res.data
    });
  });

// export const getPosts = () => (dispatch) => {
//   console.log('post actions');
//   axios.get('/api/posts').then(res =>
//     dispatch({
//       type: types.GET_POSTS,
//       payload: res.data
//     }));
// };

export const createPost = text => dispatch =>
  axios.post('/api/posts', { text, author: 'unidentified' }).then(res => {
    // console.log('postsActions.js: The create post response is ', res);
    dispatch({
      type: types.CREATE_POST,
      payload: res.data
    });
  });

export const deletePost = id => dispatch =>
  axios.delete(`/api/posts/${id}`).then(res => {
    console.log('deleting post');
    dispatch({
      type: types.DELETE_POST,
      id
    });
  });
