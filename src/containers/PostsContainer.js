import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from '../components/Post/Post';

class Posts extends Component {
  render() {
    const { posts } = this.props;

    if (!posts) {
      return <p>Loading posts...</p>;
    }
    return posts.map(post => <Post key={post.id} title={post.title} body={post.body} userName={post.userName} id={post.id} />);
  }
}

const mapStateToProps = (state) => {
  const { posts, users } = state;

  if (posts && users) {
    posts.forEach((post) => {
      const postOwner = users.find(user => user.id === post.userId);
      post.userName = postOwner ? postOwner.name : 'Unknown';
    });
  }

  return {
    posts,
    users,
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
};

Posts.defaultProps = {
  posts: null,
};

export default connect(mapStateToProps)(Posts);
