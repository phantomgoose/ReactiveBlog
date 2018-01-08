import React from "react";
import Post from "./Post";
import { connect } from "react-redux";

class Posts extends React.Component {
  render() {
    const { posts, isFetching } = this.props;

    return isFetching ? (
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
  const isFetching = !state.blog.allFetched;
  const posts = state.blog.posts.items;
  const comments = state.blog.comments.items;
  const users = state.blog.users.items;

  posts.forEach(post => {
    post.comments = comments.filter(comment => comment.postId === post.id);
    let user = users.find(user => user.id === post.userId);
    post.userName = user ? user.name : undefined;
  });

  return {
    posts,
    isFetching,
  };
};

export default connect(mapStateToProps)(Posts);
