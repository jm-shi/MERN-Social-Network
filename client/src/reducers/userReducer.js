import {
  FOLLOW_USER,
  GET_FOLLOWING,
  GET_USER,
  GET_ALL_USERS,
  UNFOLLOW_USER
} from '../actions/actionTypes';

const initialState = {
  allUsers: [],
  following: [],
  currUser: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        following: action.payload.following
      };
    case GET_FOLLOWING:
      return {
        ...state,
        following: action.payload.user.following
      };
    case GET_USER:
      return {
        ...state,
        currUser: action.payload
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        following: action.payload.following
      };
    default:
      return state;
  }
}
