import { combineReducers } from "redux";
import {
  RECEIVE_POSTS,
  RECEIVE_USERS,
  RECEIVE_COMMENTS,
} from "../actions/actions";

const posts = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.payload;
    default:
      return state;
  }
};

const comments = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.payload;
    default:
      return state;
  }
};

const users = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.payload;
    default:
      return state;
  }
};

const fetchStatus = (
  state = {
    postsFetched: false,
    usersFetched: false,
    commentsFetched: false,
  },
  action
) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, { postsFetched: true });
    case RECEIVE_USERS:
      return Object.assign({}, state, { usersFetched: true });
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, { commentsFetched: true });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts,
  comments,
  users,
  fetchStatus,
});

export default rootReducer;
