import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createPost, getPost } from './actions/postActions';
import createStore from './store';

const store = createStore();

console.log('store', store);
store.dispatch(createPost('testing'));
store.dispatch(getPost());
store.dispatch(createPost('testing again'));
store.dispatch(getPost());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
