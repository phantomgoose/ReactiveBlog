import React from 'react';
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

export default Post;
