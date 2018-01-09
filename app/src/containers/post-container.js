import Posts from "../components/Posts/Posts";
import { connect } from "react-redux";

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
