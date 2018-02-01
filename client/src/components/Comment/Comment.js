import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, body }) => (
  <div className="comment">
    <p>
      <span className="comment-name">{name}</span> commented:
    </p>
    <p className="comment-body">{body}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string,
  body: PropTypes.string,
};

Comment.defaultProps = {
  name: 'Unknown',
  body: '',
};

export default Comment;
