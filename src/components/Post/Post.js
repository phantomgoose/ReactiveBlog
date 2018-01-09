import React, { Component } from "react";
import CommentContainer from "../../containers/CommentsContainer";

class Post extends Component {
  render() {
    return (
      <div className="post">
        <p className="post-title">
          Posted by {this.props.userName} - {this.props.title}
        </p>
        <p className="post-body">{this.props.body}</p>
        <CommentContainer postId={this.props.id} />
      </div>
    );
  }
}

export default Post;
