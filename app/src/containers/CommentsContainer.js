import Comments from "../components/Comments/Comments";
import { connect } from "react-redux";

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
