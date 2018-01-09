import Comments from "../components/Comments/Comments";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  let comments = state.comments;
  if (comments) {
    comments = comments.filter(comment => comment.postId === ownProps.postId);
  }
  return { comments };
};

export default connect(mapStateToProps)(Comments);
