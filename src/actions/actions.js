import fetch from 'cross-fetch';

export const GET_POSTS = 'GET_POSTS';
export const GET_USERS = 'GET_USERS';
export const GET_COMMENTS = 'GET_COMMENTS';

const receivePosts = posts => ({
  type: GET_POSTS,
  payload: posts,
});

const receiveUsers = users => ({
  type: GET_USERS,
  payload: users,
});

const receiveComments = comments => ({
  type: GET_COMMENTS,
  payload: comments,
});

export const fetchPosts = () => async (dispatch) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonData = await res.json();
    dispatch(receivePosts(jsonData));
  } catch (error) {
    console.log(error);
  }
};

export const fetchComments = () => async (dispatch) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const jsonData = await res.json();
    dispatch(receiveComments(jsonData));
  } catch (error) {
    console.log(error);
  }
};

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = await res.json();
    dispatch(receiveUsers(jsonData));
  } catch (error) {
    console.log(error);
  }
};
