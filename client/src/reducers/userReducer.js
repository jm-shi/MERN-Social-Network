import { GET_USER, GET_ALL_USERS } from '../actions/actionTypes';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case GET_ALL_USERS:
      return action.payload;
    default:
      return state;
  }
}
