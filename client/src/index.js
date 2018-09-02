import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import uuid from 'uuid';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createPost, getPosts } from './actions/postsActions';
import createStore from './store';
import './index.css';

const store = createStore();

console.log('store', store);
store.dispatch(createPost(uuid(), 'Testing'));
store.dispatch(getPosts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
