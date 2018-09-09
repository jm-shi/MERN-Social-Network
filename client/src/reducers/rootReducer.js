import { combineReducers } from 'redux';

import authReducer from './authReducer';
import postsReducer from './postsReducer';

export default combineReducers({ authReducer, postsReducer });
