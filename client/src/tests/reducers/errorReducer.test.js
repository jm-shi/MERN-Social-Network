import { INDICATE_NO_ERRORS, GET_ERRORS } from '../../actions/actionTypes';
import errorReducer from '../../reducers/errorReducer';

const initialState = {};

describe('error reducer', () => {
  it('should return the initial state', () => {
    expect(errorReducer(initialState, {})).toEqual(initialState);
  });

  it('should handle INDICATE_NO_ERRORS', () => {
    const action = {
      type: INDICATE_NO_ERRORS,
      payload: { success: true }
    };
    expect(errorReducer(initialState, action)).toEqual({
      success: true
    });
  });

  it('should handle GET_ERRORS', () => {
    const action = {
      type: GET_ERRORS,
      payload: { password: 'Password is required' }
    };
    expect(errorReducer(initialState, action)).toEqual({
      password: 'Password is required'
    });
  });
});
