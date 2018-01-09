import fetch from "cross-fetch";

export const GET_POSTS = "GET_POSTS";
export const GET_USERS = "RECEIVE_USERS";
export const GET_COMMENTS = "RECEIVE_COMMENTS";

const receivePosts = posts => {
  return {
    type: GET_POSTS,
    payload: posts,
  };
};

const receiveUsers = users => {
  return {
    type: GET_USERS,
    payload: users,
  };
};

const receiveComments = comments => {
  return {
    type: GET_COMMENTS,
    payload: comments,
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
