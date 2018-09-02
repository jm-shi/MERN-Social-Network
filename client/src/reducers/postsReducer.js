import * as types from '../actions/actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      console.log('get posts', state);
      return [...state];
    case types.CREATE_POST: {
      console.log('created post with text', action.text);
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          author: 'anonymous'
        }
      ];
    }
    case types.DELETE_POST: {
      return state.filter(({ id }) => id !== action.id);
    }
    default:
      return state;
  }
};
