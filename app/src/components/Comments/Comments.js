import React, { Component } from "react";
import Comment from "../Comment/Comment";

class Comments extends Component {
  render() {
    const filteredComments = this.props.filteredComments;
    if (!filteredComments) {
      return <p>Loading comments...</p>;
    }
    return filteredComments.map(comment => {
      return <Comment key={comment.id} name={comment.name} body={comment.body} />;
    });
  }
}

export default Comments;
