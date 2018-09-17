import {
  GET_FOLLOWERS,
  GET_FOLLOWING,
  GET_USER,
  GET_ALL_USERS,
  UPDATE_FOLLOWERS,
  UPDATE_FOLLOWING
} from '../actions/actionTypes';

const initialState = {
  allUsers: [],
  followers: [],
  following: [],
  currUser: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FOLLOWERS:
      return {
        ...state,
        followers: action.payload.user.followers
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
    case UPDATE_FOLLOWERS:
      return {
        ...state,
        allUsers: state.allUsers.map(
          user =>
            (user._id === action.payload._id
              ? { ...user, followers: action.payload.followers }
              : user)
        )
      };
    case UPDATE_FOLLOWING:
      return {
        ...state,
        following: action.payload.following
      };
    default:
      return state;
  }
}
