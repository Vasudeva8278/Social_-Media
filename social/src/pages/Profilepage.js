import React from 'react';
import { useParams } from 'react-router-dom';
import PostList from '../components/Posts/PostList';

const ProfilePage = () => {
  const { username } = useParams();

  return (
    <div className="profile-page">
      <h2>{username}'s Profile</h2>
      {/* Profile details */}
      <PostList username={username} />
    </div>
  );
};

export default ProfilePage;
