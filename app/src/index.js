import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import PostsContainer from "./containers/post-container";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/reducers";
import { fetchPosts, fetchComments, fetchUsers } from "./actions/actions";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

store.dispatch(fetchPosts());
store.dispatch(fetchComments());
store.dispatch(fetchUsers());

ReactDOM.render(
  <Provider store={store}>
    <PostsContainer />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
