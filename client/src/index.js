import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import createStore from './store';
import { getPosts } from './actions/postsActions';
import setAuthToken from './setAuthToken';
import { setCurrentUser } from './actions/authActions';
import './index.css';

const store = createStore();

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwtDecode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
}

store.dispatch(getPosts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
