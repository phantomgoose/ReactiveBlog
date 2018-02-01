import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from '../components/Comment/Comment';

class Comments extends Component {
  render() {
    const { filteredComments } = this.props;
    if (!filteredComments) {
      return <p>No comments to show yet...</p>;
    }
    return filteredComments.map(comment => <Comment key={comment.id} name={comment.name} body={comment.body} />);
  }
}

const mapStateToProps = (state, ownProps) => {
  const allComments = state.comments;
  let filteredComments = null;
  if (allComments) {
    filteredComments = allComments.filter(comment => comment.postId === ownProps.postId);
  }
  return { filteredComments };
};

Comments.propTypes = {
  filteredComments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      body: PropTypes.string,
    }),
  ),
};

Comments.defaultProps = {
  filteredComments: null,
};

export default connect(mapStateToProps)(Comments);
