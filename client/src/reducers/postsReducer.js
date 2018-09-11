import * as types from '../actions/actionTypes';

const initialState = {
  posts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case types.CREATE_POST: {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            _id: action.payload._id,
            author: action.payload.author,
            text: action.payload.text,
            timestamp: action.payload.timestamp
          }
        ]
      };
    }
    case types.UPDATE_POST: {
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === action.id) {
            return {
              ...post,
              text: action.text,
              author: action.author
            };
          }
          return post;
        })
      };
    }
    case types.DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(({ _id }) => _id !== action.id)
      };
    }
    default:
      return state;
  }
};
