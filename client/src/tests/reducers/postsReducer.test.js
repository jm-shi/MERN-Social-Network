import * as types from '../../actions/actionTypes';
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
      type: types.GET_POSTS,
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
      type: types.CREATE_POST,
      payload: {
        author: 'Wendy',
        text: 'How are you?',
        _id: '1000'
      }
    };
    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      posts: [
        {
          author: 'Wendy',
          text: 'How are you?',
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

  it('should handle UPDATE_POST', () => {
    const action = {
      type: types.UPDATE_POST,
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
      type: types.DELETE_POST,
      id: '123'
    };
    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      posts: []
    });
  });
});
