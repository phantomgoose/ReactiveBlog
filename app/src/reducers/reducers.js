import { combineReducers } from "redux";
import { GET_POSTS, GET_USERS, GET_COMMENTS } from "../actions/actions";

const posts = (state = null, action) => {
  if (action.type !== GET_POSTS) {
    return state;
  }
  return action.payload;
};

const comments = (state = null, action) => {
  if (action.type !== GET_COMMENTS) {
    return state;
  }
  return action.payload;
};

const users = (state = null, action) => {
  if (action.type !== GET_USERS) {
    return state;
  }
  return action.payload;
};

const rootReducer = combineReducers({
  posts,
  comments,
  users,
});

export default rootReducer;
