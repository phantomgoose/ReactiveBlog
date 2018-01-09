import { connect } from 'react-redux';
import React, { Component } from 'react';
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

  if (posts) {
    posts.forEach((post) => {
      if (users) {
        const user = users.find(user => user.id === post.userId);
        post.userName = user ? user.name : 'Unknown';
      }
    });
  }

  return {
    posts,
    users,
  };
};

export default connect(mapStateToProps)(Posts);
