// Builds upon Krunal's guide:
// https://appdividend.com/2018/07/18/react-redux-node-mongodb-jwt-authentication/#9_Create_a_Register_component

import { INDICATE_NO_ERRORS, GET_ERRORS } from '../actions/actionTypes';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case INDICATE_NO_ERRORS:
      return action.payload;
    case GET_ERRORS:
      return action.payload;

    default:
      return state;
  }
}
