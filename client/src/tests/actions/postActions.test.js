import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../../actions/actionTypes';
import * as actions from '../../actions/postsActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockAxiosSuccess = (payload) => {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status: 200,
      response: payload
    });
  });
};

describe('post actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should get posts', (done) => {
    const store = mockStore({});
    const expectedAction = {
      type: types.GET_POSTS,
      payload: {}
    };
    mockAxiosSuccess({});

    store.dispatch(actions.getPosts()).then(() => {
      const dispatchedAction = store.getActions();
      expect(dispatchedAction[0]).toEqual(expectedAction);
      done();
    });
  });

  it('should create a post', (done) => {
    const store = mockStore({});
    const expectedAction = {
      type: types.CREATE_POST,
      payload: {}
    };
    mockAxiosSuccess({});
    store.dispatch(actions.createPost('Hello', { name: 'Jamie' })).then(() => {
      const dispatchedAction = store.getActions();
      expect(dispatchedAction[0]).toEqual(expectedAction);
      done();
    });
  });

  it('should update a post', (done) => {
    const store = mockStore({});
    const expectedAction = {
      type: types.EDIT_POST,
      id: '789',
      text: 'The text',
      author: 'The author'
    };
    mockAxiosSuccess({});
    store
      .dispatch(actions.editPost('789', 'The text', 'The author'))
      .then(() => {
        const dispatchedAction = store.getActions();
        expect(dispatchedAction[0]).toEqual(expectedAction);
        done();
      });
  });

  it('should delete a post', (done) => {
    const store = mockStore({});
    const expectedAction = {
      type: types.DELETE_POST,
      id: '123'
    };
    mockAxiosSuccess({});
    store.dispatch(actions.deletePost('123')).then(() => {
      const dispatchedAction = store.getActions();
      expect(dispatchedAction[0]).toEqual(expectedAction);
      done();
    });
  });
});
