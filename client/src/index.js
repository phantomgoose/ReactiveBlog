import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import PostsContainer from './containers/PostsContainer';
import rootReducer from './reducers/reducers';
import { fetchPosts, fetchComments, fetchUsers, fetchTest } from './actions/actions';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

store.dispatch(fetchPosts());
store.dispatch(fetchComments());
store.dispatch(fetchUsers());
store.dispatch(fetchTest());

ReactDOM.render(
  <Provider store={store}>
    <PostsContainer />
  </Provider>,
  document.getElementById('root'),
);
