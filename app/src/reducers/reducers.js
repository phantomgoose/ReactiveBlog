import { combineReducers } from "redux";
import {
  RECEIVE_POSTS,
  RECEIVE_USERS,
  RECEIVE_COMMENTS,
} from "../actions/actions";

const posts = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.items;
    default:
      return state;
  }
};

const comments = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.items;
    default:
      return state;
  }
};

const users = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.items;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts,
  comments,
  users,
});

export default rootReducer;
