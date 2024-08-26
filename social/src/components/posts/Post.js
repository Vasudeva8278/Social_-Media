import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h3>{post.author}</h3>
      <p>{post.content}</p>
      <div className="post-actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
};

export default Post;
