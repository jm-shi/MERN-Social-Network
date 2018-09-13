import { GET_USER } from '../actions/actionTypes';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
}
