import fetch from "cross-fetch";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

const receivePosts = json => {
  return {
    type: RECEIVE_POSTS,
    items: json,
  };
};

const receiveUsers = json => {
  return {
    type: RECEIVE_USERS,
    items: json,
  };
};

const receiveComments = json => {
  return {
    type: RECEIVE_COMMENTS,
    items: json,
  };
};

export const fetchPosts = () => {
  return async dispatch => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await res.json();
      dispatch(receivePosts(jsonData));
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchComments = () => {
  return async dispatch => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const jsonData = await res.json();
      dispatch(receiveComments(jsonData));
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchUsers = () => {
  return async dispatch => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsonData = await res.json();
      dispatch(receiveUsers(jsonData));
    } catch (e) {
      console.log(e);
    }
  };
};
