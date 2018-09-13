import { combineReducers } from 'redux';

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import postsReducer from './postsReducer';
import userReducer from './userReducer';

export default combineReducers({
  authReducer,
  errorReducer,
  postsReducer,
  userReducer
});
