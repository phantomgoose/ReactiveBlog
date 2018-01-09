import React from 'react';

const Comment = ({ name, body }) => (
  <div className="comment">
    <p className="comment-name">{name} commented:</p>
    <p className="comment-body">{body}</p>
  </div>
);

export default Comment;
