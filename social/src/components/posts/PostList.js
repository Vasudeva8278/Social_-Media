import React from 'react';
import Post from './Post';

const PostList = ({ username }) => {
  // Fetch posts by username
  const posts = [
    { id: 1, author: 'user1', content: 'First post' },
    { id: 2, author: 'user2', content: 'Second post' },
  ];

  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
