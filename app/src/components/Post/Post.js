import React, { Component } from "react";
import Comments from "../Comments/Comments";

class Post extends Component {
  render() {
    return (
      <div className="post">
        <p className="post-title">
          Posted by {this.props.userName} - {this.props.title}
        </p>
        <p className="post-body">{this.props.body}</p>
        <Comments comments={this.props.comments} />
      </div>
    );
  }
}

export default Post;
