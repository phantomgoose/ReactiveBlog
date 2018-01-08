import React from "react";
import Comment from "./Comment";

class Post extends React.Component {
  render() {
    const comments = this.props.comments;

    return (
      <div className="post">
        <p className="post-title">Posted by {this.props.userName} - {this.props.title}</p>
        <p className="post-body">{this.props.body}</p>
        {!comments
          ? null
          : comments.map((comment, index) => {
              return (
                <Comment
                  key={comment.id}
                  name={comment.name}
                  body={comment.body}
                />
              );
            })}
      </div>
    );
  }
}

export default Post;
