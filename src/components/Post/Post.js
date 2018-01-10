import React from 'react';
import PropTypes from 'prop-types';
import CommentsContainer from '../../containers/CommentsContainer';

const Post = ({ userName, title, body, id }) => (
  <div className="post">
    <p className="post-title">
      Posted by {userName} - {title}
    </p>
    <p className="post-body">{body}</p>
    <CommentsContainer postId={id} />
  </div>
);

Post.propTypes = {
  userName: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number.isRequired,
};

Post.defaultProps = {
  userName: 'Unknown',
  title: '',
  body: '',
};

export default Post;
