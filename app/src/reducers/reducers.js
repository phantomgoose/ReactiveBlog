import { combineReducers } from "redux";
import { GET_POSTS, GET_USERS, GET_COMMENTS } from "../actions/actions";

const posts = (state = [], action) => {
  if (action.type !== GET_POSTS) {
    return state;
  }
  return action.payload;
};

const comments = (state = [], action) => {
  if (action.type !== GET_COMMENTS) {
    return state;
  }
  return action.payload;
};

const users = (state = [], action) => {
  if (action.type !== GET_USERS) {
    return state;
  }
  return action.payload;
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
    case GET_POSTS:
      return Object.assign({}, state, { postsFetched: true });
    case GET_USERS:
      return Object.assign({}, state, { usersFetched: true });
    case GET_COMMENTS:
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
