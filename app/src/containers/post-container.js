import React, { Component } from "react";
import Post from "../components/Post/Post";
import { connect } from "react-redux";

class PostsContainer extends Component {
  render() {
    const { posts, allFetched } = this.props;

    return !allFetched ? (
      <p>Fetching data...</p>
    ) : (
      posts.map((post, index) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            comments={post.comments}
            userName={post.userName}
          />
        );
      })
    );
  }
}

const mapStateToProps = state => {
  const posts = state.posts;
  const comments = state.comments;
  const users = state.users;
  const allFetched =
    state.fetchStatus.postsFetched &&
    state.fetchStatus.usersFetched &&
    state.fetchStatus.commentsFetched;

  posts.forEach(post => {
    post.comments = comments.filter(comment => comment.postId === post.id);
    let user = users.find(user => user.id === post.userId);
    post.userName = user ? user.name : undefined;
  });

  return {
    posts,
    allFetched,
  };
};

export default connect(mapStateToProps)(PostsContainer);
