import * as types from '../actions/actionTypes';

const initialState = {
  posts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      console.log('GET POSTS ACTION', action);
      console.log('GET POSTS STATE', state);
      return {
        ...state,
        posts: action.payload
      };
    case types.CREATE_POST: {
      console.log('CREATE POST ACTION', action);
      console.log('CREATE POST STATE', state);
      console.log('CREATE POST STATE.POSTS', state.posts);
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            _id: action.payload._id,
            text: action.payload.text,
            author: action.payload.author
          }
        ]
      };
      /* [
        ...state,
        {
          _id: action.payload._id,
          text: action.payload.text,
          author: action.payload.author
        }
      ]; */
    }
    case types.DELETE_POST: {
      console.log('DELETE POST STATE', state);
      console.log('DELETE POST ACTION', action);
      return state.filter(({ _id }) => _id !== action.id);
    }
    default:
      return state;
  }
};
