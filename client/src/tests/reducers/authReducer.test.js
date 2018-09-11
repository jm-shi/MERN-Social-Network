import { SET_CURRENT_USER } from '../../actions/actionTypes';
import authReducer from '../../reducers/authReducer';

const initialState = {
  isAuthenticated: false,
  user: {}
};

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(
      authReducer(initialState, {
        isAuthenticated: false,
        user: {}
      })
    ).toEqual(initialState);
  });

  it('should handle SET_CURRENT_USER', () => {
    const action = {
      type: SET_CURRENT_USER,
      payload: {
        name: 'Bob',
        email: 'bob@gmail.com',
        userId: '5b95b8904d9b27359562e9',
        iat: 1536654776,
        exp: 1536658376
      }
    };
    expect(authReducer(initialState, action)).toEqual({
      isAuthenticated: true,
      user: {
        name: 'Bob',
        email: 'bob@gmail.com',
        userId: '5b95b8904d9b27359562e9',
        iat: 1536654776,
        exp: 1536658376
      }
    });
  });
});
