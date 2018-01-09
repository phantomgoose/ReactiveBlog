import React, { Component } from "react";
import Comment from "../Comment/Comment";

class Comments extends Component {
  render() {
    const comments = this.props.comments;
    if (!comments) {
      return <p>Loading comments...</p>;
    }
    return comments.map(comment => {
      return <Comment name={comment.name} body={comment.body} />;
    });
  }
}

export default Comments;
