import React, { Component } from "react";
import Post from "../Post/Post";

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
          comments={post.comments}
          title={post.title}
          body={post.body}
          userName={post.userName}
        />
      );
    });
  }
}

export default Posts;