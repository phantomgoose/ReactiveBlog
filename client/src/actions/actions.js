import fetch from 'cross-fetch';

export const GET_POSTS = 'GET_POSTS';
export const GET_USERS = 'GET_USERS';
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE';

const getPosts = posts => ({
  type: GET_POSTS,
  payload: posts,
});

const getUsers = users => ({
  type: GET_USERS,
  payload: users,
});

const getComments = comments => ({
  type: GET_COMMENTS,
  payload: comments,
});

const getPostsFailure = errorMessage => ({
  type: GET_POSTS_FAILURE,
  payload: errorMessage,
});

const getUsersFailure = errorMessage => ({
  type: GET_USERS_FAILURE,
  payload: errorMessage,
});

const getCommentsFailure = errorMessage => ({
  type: GET_COMMENTS_FAILURE,
  payload: errorMessage,
});

export const fetchPosts = () => async (dispatch) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
      throw new Error(res.status);
    }
    dispatch(getPosts(await res.json()));
  } catch (error) {
    console.log(error);
    dispatch(getPostsFailure('Unable to fetch posts via API.'));
  }
};

export const fetchComments = () => async (dispatch) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    if (!res.ok) {
      throw new Error(res.status);
    }
    dispatch(getComments(await res.json()));
  } catch (error) {
    console.log(error);
    dispatch(getCommentsFailure('Unable to fetch comments via API.'));
  }
};

export const fetchUsers = () => async (dispatch) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
      throw new Error(res.status);
    }
    dispatch(getUsers(await res.json()));
  } catch (error) {
    console.log(error);
    dispatch(getUsersFailure('Unable to fetch users via API.'));
  }
};

export const fetchTest = () => async (dispatch) => {
  try {
    const res = await fetch('/api/test');
    if (!res.ok) {
      throw new Error(res.status);
    }
    console.log(await res.json());
  } catch (error) {
    console.log(error);
  }
};
