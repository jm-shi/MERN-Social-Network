import {
  GET_POSTS,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST
} from '../../actions/actionTypes';
import postsReducer from '../../reducers/postsReducer';

const initialState = {
  posts: [
    {
      author: 'Jim',
      text: 'Hello world!',
      _id: '123'
    }
  ]
};

describe('posts reducer', () => {
  it('should return the initial state', () => {
    expect(
      postsReducer(initialState, {
        ...initialState,
        posts: [
          {
            author: 'Jim',
            text: 'Hello world!',
            _id: '123'
          }
        ]
      })
    ).toEqual(initialState);
  });

  it('should handle GET_POSTS', () => {
    const action = {
      type: GET_POSTS,
      payload: initialState.posts
    };
    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      posts: [
        {
          author: 'Jim',
          text: 'Hello world!',
          _id: '123'
        }
      ]
    });
  });

  it('should handle CREATE_POST', () => {
    const action = {
      type: CREATE_POST,
      payload: {
        author: 'Wendy',
        authorId: '123',
        avatarColor: 0,
        comments: [],
        likers: [],
        likesCount: 0,
        text: 'How are you?',
        timestamp: 0,
        _id: '1000'
      }
    };
    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      posts: [
        {
          author: 'Wendy',
          authorId: '123',
          avatarColor: 0,
          comments: [],
          likers: [],
          likesCount: 0,
          text: 'How are you?',
          timestamp: 0,
          _id: '1000'
        },
        {
          author: 'Jim',
          text: 'Hello world!',
          _id: '123'
        }
      ]
    });
  });

  it('should handle EDIT_POST', () => {
    const action = {
      type: EDIT_POST,
      author: 'Jim',
      text: 'Updated text',
      id: '123'
    };

    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      posts: [
        {
          author: 'Jim',
          text: 'Updated text',
          _id: '123'
        }
      ]
    });
  });

  it('should handle DELETE_POST', () => {
    const action = {
      type: DELETE_POST,
      id: '123'
    };
    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      posts: []
    });
  });
});
