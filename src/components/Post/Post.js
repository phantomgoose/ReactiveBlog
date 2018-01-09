import React, { Component } from "react";
import CommentsContainer from "../../containers/CommentsContainer";

class Post extends Component {
  render() {
    return (
      <div className="post">
        <p className="post-title">
          Posted by {this.props.userName} - {this.props.title}
        </p>
        <p className="post-body">{this.props.body}</p>
        <CommentsContainer postId={this.props.id} />
      </div>
    );
  }
}

export default Post;
