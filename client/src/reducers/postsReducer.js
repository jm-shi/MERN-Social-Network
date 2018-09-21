import {
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  GET_POSTS,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  UPDATE_POST_LIKES
} from '../actions/actionTypes';

const initialState = {
  posts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === action.payload._id) {
            return {
              ...post,
              comments: [
                ...post.comments,
                {
                  _id:
                    action.payload.comments[action.payload.comments.length - 1]
                      ._id,
                  commenterId: action.commenterId,
                  text: action.text,
                  timestamp: action.timestamp
                }
              ]
            };
          }
          return post;
        })
      };
    case DELETE_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === action.payload._id) {
            return {
              ...post,
              comments: action.payload.comments
            };
          }
          return post;
        })
      };
    case EDIT_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === action.payload._id) {
            return {
              ...post,
              comments: action.payload.comments
            };
          }
          return post;
        })
      };
    case GET_POSTS:
      return {
        ...initialState,
        posts: action.payload
      };
    case CREATE_POST: {
      return {
        ...state,
        posts: [
          {
            _id: action.payload._id,
            author: action.payload.author,
            authorId: action.payload.authorId,
            avatarColor: action.payload.avatarColor,
            comments: [],
            likers: action.payload.likers,
            likesCount: action.payload.likesCount,
            text: action.payload.text,
            timestamp: action.payload.timestamp
          },
          ...state.posts
        ]
      };
    }
    case EDIT_POST: {
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
    case UPDATE_POST_LIKES: {
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === action.payload._id) {
            return {
              ...post,
              likers: action.payload.likers,
              likesCount: action.payload.likesCount
            };
          }
          return post;
        })
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(({ _id }) => _id !== action.id)
      };
    }
    default:
      return state;
  }
};
