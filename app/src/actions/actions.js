import fetch from "cross-fetch";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
const receivePosts = json => {
  return {
    type: RECEIVE_POSTS,
    items: json,
  };
};

export const RECEIVE_USERS = "RECEIVE_USERS";
const receiveUsers = json => {
  return {
    type: RECEIVE_USERS,
    items: json,
  };
};

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
const receiveComments = json => {
  return {
    type: RECEIVE_COMMENTS,
    items: json,
  };
};

export const fetchPosts = () => {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(
        res => res.json(),
        error => console.log("Error during api call.", error)
      )
      .then(json => {
        dispatch(receivePosts(json));
      });
  };
};

export const fetchComments = () => {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/comments")
      .then(
        res => res.json(),
        error => console.log("Error during api call.", error)
      )
      .then(json => {
        dispatch(receiveComments(json));
      });
  };
};

export const fetchUsers = () => {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then(
        res => res.json(),
        error => console.log("Error during api call.", error)
      )
      .then(json => {
        dispatch(receiveUsers(json));
      });
  };
};