import { combineReducers } from 'redux';
import { GET_POSTS, GET_USERS, GET_COMMENTS, GET_POSTS_FAILURE, GET_USERS_FAILURE, GET_COMMENTS_FAILURE } from '../actions/actions';

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

const errorMessages = (state = { posts: null, comments: null, users: null }, action) => {
  switch (action.type) {
    case GET_POSTS_FAILURE:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_COMMENTS_FAILURE:
      return {
        ...state,
        comments: action.payload,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts,
  comments,
  users,
  errorMessages,
});

export default rootReducer;
