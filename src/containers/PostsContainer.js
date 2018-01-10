import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from '../components/Post/Post';

class Posts extends Component {
  render() {
    const { posts, errorMessages, errorsExist } = this.props;

    if (errorsExist) {
      return Object.keys(errorMessages).map(key => <p>{errorMessages[key]}</p>);
    }
    if (!posts) {
      return <p>Loading posts...</p>;
    }
    return posts.map(post => <Post key={post.id} title={post.title} body={post.body} userName={post.userName} id={post.id} />);
  }
}

const mapStateToProps = (state) => {
  const { posts, users, errorMessages } = state;
  // iterate through errorMessages to see if there are any non-null values. If there are, set errorsExist to true
  const errorsExist = Object.keys(errorMessages).find(key => errorMessages[key] !== null) !== undefined;

  if (posts && users) {
    posts.forEach((post) => {
      const postOwner = users.find(user => user.id === post.userId);
      post.userName = postOwner ? postOwner.name : 'Unknown';
    });
  }

  return {
    posts,
    users,
    errorMessages,
    errorsExist,
  };
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string,
      userId: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
  errorMessages: PropTypes.shape({
    posts: PropTypes.string,
    users: PropTypes.string,
    comments: PropTypes.string,
  }),
  errorsExist: PropTypes.bool.isRequired,
};

Posts.defaultProps = {
  posts: null,
  errorMessages: null,
};

export default connect(mapStateToProps)(Posts);
