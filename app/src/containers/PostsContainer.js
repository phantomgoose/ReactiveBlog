import { connect } from "react-redux";
import React, { Component } from "react";
import Post from "../components/Post/Post";

class Posts extends Component {
  render() {
    const posts = this.props.posts;

    if (!posts) {
      return <p>Loading posts...</p>;
    }
    return posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          userName={post.userName}
          id={post.id}
        />
      );
    });
  }
}

const mapStateToProps = state => {
  const posts = state.posts;
  const users = state.users;

  if (posts) {
    posts.forEach(post => {
      if (users) {
        let user = users.find(user => user.id === post.userId);
        post.userName = user ? user.name : "Unknown";
      }
    });
  }

  return {
    posts,
    users,
  };
};

export default connect(mapStateToProps)(Posts);
