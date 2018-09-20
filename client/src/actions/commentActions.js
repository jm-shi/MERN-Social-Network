import axios from 'axios';
import {
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  GET_COMMENTS
} from './actionTypes';

export const getComments = postId => dispatch =>
  axios.get(`/posts${postId}`).then((res) => {
    dispatch({
      type: GET_COMMENTS,
      payload: res.data
    });
  });

export const addComment = (postId, commenterId, text, timestamp) => dispatch =>
  axios.patch(`/posts${postId}`, { commenterId, text, timestamp }).then(res =>
    dispatch({
      type: ADD_COMMENT,
      commenterId,
      text,
      timestamp
    }));

// export const getPosts = () => dispatch =>
//   axios.get('/posts').then(res =>
//     dispatch({
//       type: GET_POSTS,
//       payload: res.data
//     }));

// export const createPost = (text, user) => dispatch =>
//   axios
//     .post('/posts', {
//       text,
//       author: user.name,
//       authorId: user.userId,
//       avatarColor: user.avatarColor
//     })
//     .then(res =>
//       dispatch({
//         type: CREATE_POST,
//         payload: res.data
//       }));
