import React, { Component } from "react";
import Comment from "../components/Comment/Comment";
import { connect } from "react-redux";

class Comments extends Component {
  render() {
    const filteredComments = this.props.filteredComments;
    if (!filteredComments) {
      return <p>Loading comments...</p>;
    }
    return filteredComments.map(comment => {
      return (
        <Comment key={comment.id} name={comment.name} body={comment.body} />
      );
    });
  }
}

const mapStateToProps = (state, ownProps) => {
  const allComments = state.comments;
  let filteredComments;
  if (allComments) {
    filteredComments = allComments.filter(
      comment => comment.postId === ownProps.postId
    );
  }
  return { filteredComments };
};

export default connect(mapStateToProps)(Comments);
