import { combineReducers } from "redux";
import {
  RECEIVE_POSTS,
  RECEIVE_USERS,
  RECEIVE_COMMENTS,
} from "../actions/actions";

const blog = (
  state = {
    posts: {
      items: [],
      fetched: false,
    },
    comments: {
      items: [],
      fetched: false,
    },
    users: {
      items: [],
      fetched: false,
    },
    allFetched: false,
  },
  action
) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        posts: {
          items: action.items,
          fetched: true,
        },
        allFetched: state.comments.fetched && state.users.fetched,
      });
    case RECEIVE_USERS:
      return Object.assign({}, state, {
        users: {
          items: action.items,
          fetched: true,
        },
        allFetched: state.posts.fetched && state.comments.fetched,
      });
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, {
        comments: {
          items: action.items,
          fetched: true,
        },
        allFetched: state.posts.fetched && state.users.fetched,
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  blog,
});

export default rootReducer;
