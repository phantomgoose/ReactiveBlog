import fetch from "cross-fetch";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

const receivePosts = jsonData => {
  return {
    type: RECEIVE_POSTS,
    payload: jsonData,
  };
};

const receiveUsers = jsonData => {
  return {
    type: RECEIVE_USERS,
    payload: jsonData,
  };
};

const receiveComments = jsonData => {
  return {
    type: RECEIVE_COMMENTS,
    payload: jsonData,
  };
};

export const fetchPosts = () => {
  return async dispatch => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await res.json();
      dispatch(receivePosts(jsonData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchComments = () => {
  return async dispatch => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const jsonData = await res.json();
      dispatch(receiveComments(jsonData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchUsers = () => {
  return async dispatch => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsonData = await res.json();
      dispatch(receiveUsers(jsonData));
    } catch (error) {
      console.log(error);
    }
  };
};
