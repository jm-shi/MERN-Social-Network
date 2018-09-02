import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createPost, getPosts } from './actions/postsActions';
import createStore from './store';

const store = createStore();

console.log('store', store);
store.dispatch(createPost('testing'));
store.dispatch(getPosts());
store.dispatch(createPost('testing again'));
store.dispatch(getPosts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
