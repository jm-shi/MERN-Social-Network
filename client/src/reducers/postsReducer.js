import * as types from '../actions/actionTypes';

const initialState = {
  posts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      console.log('get posts', state);
      return [...state];
    case types.CREATE_POST: {
      return [
        ...state,
        {
          text: action.text,
          author: 'anonymous'
        }
      ];
    }
    // case types.GET_POSTS:
    //   console.log('get posts', state);
    //   return { ...state };
    // case types.CREATE_POST: {
    //   return {
    //     ...state,
    //     posts: [...state.posts, action.text]
    //   };
    // }
    default:
      return state;
  }
};
