import * as types from '../actions/actionTypes';

const initialState = {
  text: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POST:
      console.log('get post', state);
      return {
        ...state
      };
    case types.CREATE_POST: {
      return {
        ...state,
        text: action.text
      };
    }
    default:
      return state;
  }
};
