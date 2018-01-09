import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <p className="comment-name">{this.props.name} commented:</p>
        <p className="comment-body">{this.props.body}</p>
      </div>
    );
  }
}

export default Comment;
